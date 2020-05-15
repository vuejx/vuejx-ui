var monitor = require('node-docker-monitor');
var http = require('http');
var httpProxy = require('http-proxy');
var parseurl = require('parseurl');
const forward = require('http-forward')

var dockerOpts = { socketPath: process.env.DOCKER_SOCKET };
if (!dockerOpts.socketPath) {
    dockerOpts.host = process.env.DOCKER_HOST;
    dockerOpts.port = process.env.DOCKER_PORT;
    if (!dockerOpts.host) {
        dockerOpts.socketPath = '/var/run/docker.sock';
    }
}
var httpPort = process.env.HTTP_HOST || 8080;
var routes = {};
console.log('Connecting to Docker: %j', dockerOpts);
monitor({
    onContainerUp: function (containerInfo, docker) {
        if (containerInfo.Labels && containerInfo.Labels.api_route) {
            var container = docker.getContainer(containerInfo.Id);
            container.inspect(function (err, containerDetails) {
                if (err) {
                    console.log('Error getting container details for: %j', containerInfo, err);
                } else {
                    try {
                        var route = {
                            apiRoute: containerInfo.Labels.api_route,
                            upstreamUrl: getUpstreamUrl(containerDetails)
                        };
                        routes[containerInfo.Id] = route;
                        console.log('Registered new api route:', route);
                    } catch (e) {
                        console.log('Error creating new api route for: %j', containerDetails, e);
                    }
                }
            });
        }
    },
    onContainerDown: function (container) {
        if (container.Labels && container.Labels.api_route) {
            var route = routes[container.Id];
            if (route) {
                delete routes[container.Id];
                console.log('Removed api route: %j', route);
            }
        }
    }
}, dockerOpts);
// create and start http server
var server = http.createServer(function (req, res) {
    var url = req.url;
    var parsedUrl = parseurl(req);
    if (url.endsWith('.js') || url.endsWith('.css') || url.endsWith('.woff2') || url.endsWith('.map')) {
        req.forward = { target: 'http://documentation:8801' }
        forward(req, res)
    }
    for (id in routes) {
        if (routes.hasOwnProperty(id) && handleRoute(routes[id], req, res)) {
            return;
        }
    }
    returnError(req, res);
});

console.log('API gateway is listening on port: %d', httpPort);


server.listen(httpPort);


// create proxy
var proxy = httpProxy.createProxyServer();
proxy.on('error', function (err, req, res) {
    returnError(req, res);
});
async function handleRoute(route, req, res) {
    var url = req.url;
    var parsedUrl = parseurl(req);
    
    if (parsedUrl.path.indexOf(route.apiRoute) === 0) {
        req.url = url.replace(route.apiRoute, '');
        proxy.web(req, res, { target: route.upstreamUrl });
        return true;
    } else {
        return false;
    }
}
function getUpstreamUrl(containerDetails) {
    var ports = containerDetails.NetworkSettings.Ports;
    for (id in ports) {
        if (ports.hasOwnProperty(id)) {
            return 'http://' + containerDetails.NetworkSettings.Networks['vuejx-ui_vuejx_network'].IPAddress + ':' + id.split('/')[0];
        }
    }
}
function returnError(req, res) {
    res.writeHead(502, { 'Content-Type': 'text/plain' });
    res.write('Bad Gateway for: ' + req.url);
    res.end();
}