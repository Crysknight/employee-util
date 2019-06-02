<template>
    <div class="eu-auth">
        <form
            ref="authForm"
            class="eu-auth__form"
            @submit.prevent="authorize({ login, password })"
        >
            <EUInput
                type="login"
                class="eu-auth__input"
                placeholder="Логин"
                required
                v-model="login"
            />
            <EUInput
                type="password"
                class="eu-auth__input"
                placeholder="Пароль"
                required
                v-model="password"
            />
            <EUButton type="submit">Войти</EUButton>
        </form>
    </div>
</template>

<script>
export default {
    name: 'EUAuth',
    data() {
        return {
            login: '',
            password: ''
        };
    },
    methods: {
        ...mapActions('app', ['authorize'])
    }
};
</script>

<style lang="scss">
    .eu-auth {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;

        &__form {
            display: flex;
            flex-direction: column;
        }
    }
</style>
