<template>
    <button
        :type="type"
        :class="['eu-button', buttonClasses]"
        :style="buttonStyle"
        @click="handleClick"
    >
        <slot name="default" />
    </button>
</template>

<script>
export default {
    name: 'EUButton',
    props: {
        disabled: {
            type: Boolean,
            default() {
                return false;
            }
        },
        type: String,
        small: Boolean,
        icon: String,
        noShadow: Boolean,
        round: Boolean,
        white: Boolean,
        warning: Boolean,
        danger: Boolean
    },
    computed: {
        buttonClasses() {
            return {
                'eu-button--disabled': this.disabled,
                'eu-button--small': this.small,
                'eu-button--icon': this.icon,
                'eu-button--icon-no-text': !this.$slots.default && this.icon,
                'eu-button--round': this.round,
                'eu-button--white': this.white,
                'eu-button--warning': this.warning,
                'eu-button--danger': this.danger
            };
        },
        buttonStyle() {
            const style = {};

            if (this.icon) {
                const resolvedIcon = require(`assets/${this.icon}`);
                style.backgroundImage = `url(${resolvedIcon})`;
            }

            if (!this.noShadow) {
                style.boxShadow = '0 0 5px rgba(50, 50, 50, 0.3)';
            }

            return style;
        }
    },
    methods: {
        handleClick(event) {
            if (this.disabled) {
                event.preventDefault();
            } else {
                this.$emit('click');
            }
        }
    }
};
</script>

<style lang="scss">
    .eu-button {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        padding: 0 15px;
        border-radius: 2px;
        outline: none;
        border: none;
        background-color: #5c9eff;
        color: white;
        font-weight: bold;
        font-size: 16px;
        text-transform: uppercase;
        cursor: pointer;

        &:hover {
            background-color: #297fff;
        }

        &--small {
            height: 20px;
            padding: 0 10px;
            font-size: 10px;
        }

        &--icon {
            padding-right: 37px;
            background-size: 22px;
            background-repeat: no-repeat;
            background-position: calc(100% - 22px) center;
        }

        &--icon.eu-button--small {
            padding-right: 24px;
            background-size: 14px;
        }

        &--icon-no-text {
            width: 40px;
            padding: 0;
            background-position: center;
        }

        &--icon-no-text.eu-button--small {
            width: 20px;
        }

        &--round {
            border-radius: 20px;
        }

        &--round.eu-button--small {
            border-radius: 10px;
        }

        &--white {
            background-color: white;
            &:hover {
                background-color: #efefef;
            }
        }

        &--warning {
            background-color: #ffd45c;
            &:hover {
                background-color: #ffc41e;
            }
        }

        &--danger {
            background-color: #ff644b;
            &:hover {
                background-color: #ff472a;
            }
        }

        &--disabled {
            background-color: #a5acb6;
            opacity: 0.5;
            cursor: default;
            &:hover {
                background-color: #a5acb6;
            }
        }
    }
</style>
