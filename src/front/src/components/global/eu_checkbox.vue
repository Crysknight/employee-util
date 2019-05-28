<template>
    <div class="eu-checkbox">
        <div v-if="label" class="eu-checkbox__label">{{ label }}</div>
        <input
            type="checkbox"
            class="eu-checkbox__checkbox"
            @change="$emit('input', $event.target.value)"
        />
    </div>
</template>

<script>
export default {
    name: 'EUCheckbox',
    props: {
        label: String,
        value: Boolean
    }
};
</script>

<style lang="scss">
    .eu-checkbox {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin: 12px 0;

        &__label {
            margin-right: 4px;
            font-size: 14px;
        }
    }
</style>
