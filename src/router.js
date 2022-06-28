import Vue from 'vue'
import VueRouter from 'vue-router'

import LoginPage from './components/LoginPage.vue';
import IndexPage from './components/IndexPage.vue';
import FunctionsPage from './components/FunctionsPage.vue';
import UsersPage from './components/UsersPage.vue';
import RolesPage from './components/RolesPage.vue';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [{
        path: "/login",
        name: "login",
        component: LoginPage
    }, {
        path: "/index",
        name: "index",
        component: IndexPage,
        children: [{
            path: 'functions',
            component: FunctionsPage
        }, {
            path: 'users',
            component: UsersPage
        }, {
            path: 'roles',
            component: RolesPage
        }]
    }]
});