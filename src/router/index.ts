import { createRouter, createWebHashHistory } from 'vue-router'
import Home from "../views/Home.vue"
import CountryInfo from "../views/CountryInfo.vue"

const routes= [
    {
        path:"/",
        name:"Home",
        component:Home
    },
    {
        path:"/country/:country",
        name:"CountryInfo",
        component:CountryInfo,
        props:true
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})
  
export default router