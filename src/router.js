import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('@/components/Home')
const Settings = () => import('@/components/Settings')

import PageNotFound from '@/components/PageNotFound'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/settings',
            name: 'Settings',
            component: Settings
        },
        {
            path: '**',
            name: 'PageNotFound',
            component: PageNotFound
        }
    ]
})