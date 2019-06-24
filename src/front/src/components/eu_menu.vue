<template>
    <transition name="menu" :duration="300">
        <div v-if="menu" class="eu-menu">
            <div class="eu-menu__content">
                MENU
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'EUMenu',
    computed: {
        ...mapState('appInterface', ['menu'])
    }
};
</script>

<style lang="scss">
    .eu-menu {
        flex-shrink: 0;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        width: 250px;
        height: 100%;
        position: relative;
        background-color: white;
        box-shadow: 0 0 5px rgba(100, 100, 100, 0.15);
        transition: width 0.3s;
        &.menu-enter,
        &.menu-leave-to {
            width: 0px;
        }

        &__content {
            width: 100%;
            height: 100%;
            position: absolute;
            right: 0;
            padding: 25px;
        }
    }
</style>
