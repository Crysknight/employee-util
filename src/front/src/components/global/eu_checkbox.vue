<template>
    <div class="eu-checkbox">
        <div
            type="checkbox"
            :class="['eu-checkbox__checkbox', checkboxClasses]"
            @click="input"
        ></div>
        <div v-if="label" class="eu-checkbox__label">{{ label }}</div>
    </div>
</template>

<script>
export default {
    name: 'EUCheckbox',
    props: {
        label: String,
        value: Boolean
    },
    computed: {
        checkboxClasses() {
            return {
                'eu-checkbox__checkbox--checked': this.value
            };
        }
    },
    methods: {
        input() {
            this.$emit('input', !this.value);
        }
    }
};
</script>

<style lang="scss">
    .eu-checkbox {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin: 12px 0;

        &__checkbox {
            width: 20px;
            height: 20px;
            position: relative;
            border: 1px solid #92beff;
            border-radius: 3px;
            background-color: white;
            &--checked:before {
                content: '';
                width: 14px;
                height: 14px;
                position: absolute;
                left: 2px;
                top: 2px;
                border-radius: 2px;
                background-color: #92beff;
            }
        }

        &__label {
            margin-left: 8px;
            font-size: 14px;
        }
    }
</style>
