const Index = (resolve) => require(['../pages/index.vue'], resolve);
const Home = (resolve) => require(['../pages/home/index.vue'], resolve);
const Login = (resolve) => require(['../pages/login/index.vue'], resolve);
const ServiceAgency = (resolve) => require(['../pages/service-agency/index.vue'], resolve);
const DownloadCenter = (resolve) => require(['../pages/download-center/index.vue'], resolve);
const routers = [{
    path: '/',
    redirect: '/home'
},];
let router = {
    path: '/',
    meta: {
        title: ''
    },
    component: Index,
    children: [{
        path: "",
        component: Home,
    },
    {
        path: "home",
        component: Home,
    },
    {
        path: "login",
        component: Login
    },
    {
        path: "serviceAgency",
        component: ServiceAgency
    },
    {
        path: "downloadCenter",
        component: DownloadCenter
    },
    {
        path: "downloadCenter/grading",
        component: DownloadCenter
    },
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
};

routers.push(router);
export default routers;