import { createApp } from 'vue'
import App from './App.vue'
import './assets/materialdesignicons-webfont.woff2'
import './assets/materialdesignicons.css'
import router from './router/router.js';

const app = createApp(App)

app.use(router)
app.mount('#app')
