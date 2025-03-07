import { createRouter, createWebHistory } from "vue-router"
import Home from "../components/Home.vue"
//add more here

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router