<template>
    <div
        v-if="currentModal"
        class="eu-modal"
        @click.self="handleOverlayClick"
    >
        <component
            class="eu-modal__content"
            :is="modalComponent"
        />
    </div>
</template>

<script>
import { MODAL_TYPES } from 'constants';

import * as types from './types';

export default {
    name: 'EUModal',
    components: { ...types },
    computed: {
        modalComponent() {
            return MODAL_TYPES[this.currentModal.type] || this.currentModal.type;
        },
        ...mapGetters('interface', ['currentModal'])
    },
    methods: {
        handleOverlayClick() {
            if (this.currentModal.hideOnOverlayClick) {
                this.hideModal();
            }
        },
        ...mapActions('interface', ['hideModal'])
    }
};
</script>

<style lang="scss">
    .eu-modal {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 100;
        background-color: rgba(40, 40, 40, 0.4);
        cursor: pointer;

        &__content {
            padding: 25px;
            border-radius: 3px;
            background-color: white;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
        }
    }
</style>
