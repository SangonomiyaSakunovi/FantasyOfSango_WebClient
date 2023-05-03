import { createRouter, createWebHashHistory } from "vue-router";

import MainPage from '@/views/MainPage.vue'
import AdminPage from '@/views/AdminPage.vue'

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: MainPage,
        },
        {
            path: '/admin',
            component: AdminPage,
        }
    ]
})