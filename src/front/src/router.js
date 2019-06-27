import VueRouter from 'vue-router';
import {
    EUAuth,
    EUEmployees,
    EUAddEmployee,
    EUEmployeeGroups
} from './views';

Vue.use(VueRouter);

const routes = [
    {
        name: 'home',
        path: '/',
        component: EUEmployeeGroups,
        meta: {
            syncStore: ['employees', 'employeeGroups']
        }
    },
    {
        name: 'employees',
        path: '/employees/:groupId',
        component: EUEmployees,
        meta: {
            syncStore: ['employees']
        }
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

window.$router = router;

export default router;
