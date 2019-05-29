import axios from 'axios';

import router from 'router';

const instance = axios.create({
    baseURL: '/api/',
    timeout: 3000,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});

instance.interceptors.response.use(
    response => {
        return response.data;
    },
    error => {
        if (
            error.response.status === 401 &&
            router.currentRoute.name !== 'auth'
        ) {
            router.push({ name: 'auth' });
        }

        Promise.reject(error);
    }
);

export default instance;
