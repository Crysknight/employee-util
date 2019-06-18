export const INPUT_TYPES = ['login', 'password', 'email'];

export const MODAL_TYPES = {
    ADD_EMPLOYEE: 'EUModalAddEmployee',
    ADD_MEASURE: 'EUModalAddMeasure',
    DELETE_MEASURE: 'EUModalDeleteMeasure'
};

export const SHARED_STORE = {
    meta: [
        'subscribe'
    ],
    employees: [
        'createEmployee',
        'deleteEmployee'
    ],
    measures: [
        'createMeasure',
        'deleteMeasures'
    ]
};

export const SOCKET_ADDRESS = 'ws://localhost:8082';
