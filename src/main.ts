import { createApp } from 'vue'
import './style.css'
import { createPinia } from 'pinia'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
const pinia = createPinia()
import "./assets/tailwind.css"

const app = createApp(App)

app.use(pinia)
app.use(VueAxios, axios)
app.use(router)
app.mount('#app')

