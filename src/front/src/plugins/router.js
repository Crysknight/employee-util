import VueRouter from 'vue-router';
import { EUAuth, EUEmployees, EUAddEmployee } from '../views';

Vue.use(VueRouter);

const routes = [
    {
        name: 'home',
        path: '/',
        component: EUEmployees
    },
    {
        name: 'auth',
        path: '/auth',
        component: EUAuth
    },
    {
        name: 'addEmployee',
        path: '/add-employee',
        component: EUAddEmployee
    }
];

const router = new VueRouter({ routes });

export default router;
