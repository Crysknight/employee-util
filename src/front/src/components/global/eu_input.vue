<template>
    <input
        class="eu-input"
        :type="type"
        :placeholder="placeholder"
        :required="required"
        :value="value"
        @input="$emit('input', $event.target.value)"
    />
</template>

<script>
import { INPUT_TYPES } from 'constants';

export default {
    name: 'EUInput',
    props: {
        type: {
            type: String,
            validator(type) {
                return INPUT_TYPES.includes(type);
            }
        },
        value: String,
        placeholder: String,
        required: Boolean,
        disabled: Boolean
    }
};
</script>

<style lang="scss">
    .eu-input {
        height: 40px;
        margin: 12px 0;
        padding: 0 4px;
        border: 1px solid #92beff;
        border-radius: 2px;
        background-color: white;
        font-size: 14px;
        &:focus {
            outline: none;
        }
    }
</style>
