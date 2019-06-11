export const INPUT_TYPES = ['login', 'password', 'email'];

export const MODAL_TYPES = {
    ADD_EMPLOYEE: 'EUModalAddEmployee',
    ADD_METRICS: 'EUModalAddMetrics',
    DELETE_METRICS: 'EUModalDeleteMetrics'
};

export const SHARED_ACTIONS = [
    'employees/getEmployees',
    'employees/createEmployee',
    'employees/deleteEmployees'
];

export const SOCKET_ADDRESS = 'ws://localhost:8082';
