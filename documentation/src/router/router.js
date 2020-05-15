import { createRouter, createWebHistory } from 'vue-router'

const routerHistory = createWebHistory('#');

const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            name: 'Documention page',
            props: true,
            component: () => import('../pages/Index.vue'),
            children: [
                {
                  path: '/lifecycle',
                  name: 'Lifecycle page detail',
                  component: () => import('../pages/getting_started/Lifecycle.vue')
                },
                {
                    path: '/event',
                    name: 'Events page detail',
                    component: () => import('../pages/getting_started/Event.vue')
                },
                {
                    path: '/reference',
                    name: 'Reference page detail',
                    component: () => import('../pages/getting_started/Reference.vue')
                },
                {
                    path: '/tailwindcss',
                    name: 'Tailwindcss page detail',
                    component: () => import('../pages/getting_started/Tailwindcss.vue')
                },
                {
                    path: '/development/docker',
                    name: 'Development docker page detail',
                    component: () => import('../pages/development/Docker.vue')
                },
                {
                    path: '/production/docker',
                    name: 'Production docker page detail',
                    component: () => import('../pages/production/Docker.vue')
                }
            ]
        }
    ]
})

export default router