<template>
    <div
        v-if="currentMessage"
        :class="['eu-message', messageClasses]"
    >{{ text }}</div>
</template>

<script>
export default {
    name: 'EUMessage',
    computed: {
        text() {
            return this.currentMessage.text;
        },
        type() {
            return this.currentMessage.type;
        },
        messageClasses() {
            return {
                'eu-message--error': this.type === 'error',
                'eu-message--warning': this.type === 'warning',
                'eu-message--success': this.type === 'success'
            };
        },
        ...mapGetters('appInterface', ['currentMessage'])
    }
};
</script>

<style lang="scss">
    .eu-message {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 50px;
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 100;
        font-size: 18px;
        color: white;
        background-color: #666666;

        &--error {
            background-color: #bb4433;
        }

        &--warning {
            background-color: #bb8822;
        }

        &--success {
            background-color: #44bb33;
        }
    }
</style>
