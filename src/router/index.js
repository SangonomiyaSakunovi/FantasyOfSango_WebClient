import { createRouter, createWebHashHistory } from "vue-router";

import MainPage from '@/views/MainPage.vue'
import AdminPage from '@/views/AdminPage.vue'
import ArticlePage from '@/views/ArticlePage.vue'

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: MainPage,
        },
        {
            path: '/article',
            component: ArticlePage,
        },
        {
            path: '/admin',
            component: AdminPage,
        }
    ]
})