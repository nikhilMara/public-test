import { createApp } from 'vue'
import '@gohighlevel/highrise/style.css'
import './main.css'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
