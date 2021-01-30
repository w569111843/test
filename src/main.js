import Vue from 'vue'
INZ.Vue = Vue;
import VueRouter from 'vue-router'
import axios from 'axios'
import ElementUI from 'element-ui'
import App from './App.vue'
import Routers from './router';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/index.css'
import INZ from './inz';
import VueCookies from 'vue-cookies';

Vue.config.productionTip = false
Vue.prototype.$axios = axios
axios.defaults.baseURL = '/api'


console.log(VueCookies);
Vue.use(VueCookies);
Vue.use(VueRouter);
Vue.use(ElementUI);
new Vue()

let init = function() {
    // 路由配置
    const RouterConfig = {
        mode: 'history',
        routes: Routers,
        base: '/',
    };

    const router = new VueRouter(RouterConfig);
    let vueObject = {
        router: router,
        // store: store
    };
    INZ.Vue = vueObject;

    new Vue({
        el: '#app',
        router: router,
        render: h => h(App)
    });
};
init();
