import * as Cookies from 'tiny-cookie';

export const getUser = () => {
    const id = Cookies.get('eu_userId');

    return id
        ? {
            id,
            login: Cookies.get('eu_user'),
            name: Cookies.get('eu_userName'),
            token: Cookies.get('eu_token')
        }
        : null;
};

export const stringRandom = (length = 9) => {
    return Math.random()
        .toString(36)
        .substr(2, length);
};

export const arrayDelete = (array, value) => {
    const index = array.indexOf(value);
    if (index !== -1) {
        array.splice(index, 1);
    }
};

export const arrayToggle = (array, value) => {
    const index = array.indexOf(value);
    if (index === -1) {
        array.push(value);
    } else {
        array.splice(index, 1);
    }
};
