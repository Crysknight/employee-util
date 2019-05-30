<template>
    <div class="eu-app">
        <EUMenu />
        <EUContextMenu />
        <EUModal />
        <div class="eu-app__content">
            <EUHeader />
            <div class="eu-app__view">
                <router-view />
            </div>
            <EUMessage />
        </div>
    </div>
</template>

<script>
import {
    EUMenu,
    EUContextMenu,
    EUHeader,
    EUMessage,
    EUModal
} from 'components';

export default {
    name: 'EUApp',
    components: {
        EUMenu,
        EUContextMenu,
        EUHeader,
        EUMessage,
        EUModal
    },
    created() {
        this.checkAuth();
    },
    methods: {
        ...mapActions('app', ['checkAuth'])
    }
};
</script>

<style lang="scss">
html, body {
    height: 100%;
    margin: 0;
    padding: 0;

    * {
        box-sizing: border-box;
    }

    button {
        border: none;
        background-color: transparent;
        outline: none;
        &:focus {
            border: none;
            outline: none;
        }
    }
}

.eu-app {
    display: flex;
    height: 100%;
    font-family: Verdana, Helvetica, Arial, sans-serif;
    background-color: #92beff;
    color: #2c3e50;

    &__content {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        position: relative;
        padding-top: 50px;
    }

    &__view {
        height: 100%;
        padding: 25px;
    }
}
</style>
