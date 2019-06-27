<template>
    <div class="eu-header">
        <EUButton
            icon="menu.svg"
            noShadow
            class="eu-header__menu-trigger"
            @click="toggleMenu"
        />
        <!-- <button class="eu-header__menu-trigger" @click="toggleMenu"></button> -->
        <div class="eu-header__title">Курсоломы</div>
        <div v-if="login" class="eu-header__login">{{ login }}</div>
        <EUButton
            v-if="login"
            small
            @click="logOut"
        >Выйти</EUButton>
    </div>
</template>

<script>
import { MUTATION_TOGGLE_MENU } from 'constants';

export default {
    name: 'EUHeader',
    computed: {
        ...mapGetters('app', ['login'])
    },
    methods: {
        toggleMenu() {
            this.MUTATION_TOGGLE_MENU();
        },
        ...mapMutations('appInterface', [MUTATION_TOGGLE_MENU]),
        ...mapActions('app', ['logOut'])
    }
};
</script>

<style lang="scss">
    .eu-header {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        height: 50px;
        position: absolute;
        top: 0;
        left: 0;
        padding: 0 15px;
        background-color: #5c9eff;
        box-shadow: 0 0 5px rgba(100, 100, 100, 0.15);
        color: white;

        &__menu-trigger {
            margin-right: 15px;
        }

        &__title {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            height: 100%;
            font-size: 22px;
            text-transform: uppercase;
            font-weight: bold;
        }

        &__login {
            margin-left: auto;
            margin-right: 15px;
        }
    }
</style>
