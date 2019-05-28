export default {
    login(state) {
        const { user } = state;

        return user ? user.login : null;
    },
    token(state) {
        const { user } = state;

        return user ? user.token : null;
    }
};
