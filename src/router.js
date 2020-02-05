import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from './components/Login.vue';
import Index from './components/Index.vue';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [{
        path: "/login",
        name: "login",
        component: Login
    }, {
        path: "/index",
        name: "index",
        component: Index
    }]
});