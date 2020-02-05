import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from './components/Login.vue';
import Index from './components/Index.vue';
import Functions from './components/Functions.vue';
import Users from './components/Users.vue';
import Roles from './components/Roles.vue';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [{
        path: "/login",
        name: "login",
        component: Login
    }, {
        path: "/index",
        name: "index",
        component: Index,
        children: [{
            path: 'functions',
            component: Functions
        }, {
            path: 'users',
            component: Users
        }, {
            path: 'roles',
            component: Roles
        }]
    }]
});