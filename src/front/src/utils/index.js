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
