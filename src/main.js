import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// Import Bootstrap CSS using CDN
const linkElement = document.createElement('link')
linkElement.rel = 'stylesheet'
linkElement.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css'
document.head.appendChild(linkElement)

createApp(App).use(store).use(router).mount('#app')
