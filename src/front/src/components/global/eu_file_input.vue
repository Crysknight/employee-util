<template>
    <div
        class="eu-file-input"
    >
        <EUButton small @click="triggerInput">Выбрать файл</EUButton>
        <input
            ref="fileInput"
            type="file"
            class="eu-file-input__input"
            @change="input"
        />
    </div>
</template>

<script>
export default {
    name: 'EUFileInput',
    methods: {
        triggerInput() {
            this.$refs.fileInput.click();
        },
        input({ target }) {
            const { files: [file] } = target;
            this.$emit('input', file);
        }
    }
};
</script>

<style lang="scss">
    .eu-file-input {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        width: 150px;
        height: 40px;
        margin: 12px 0;

        &__input {
            display: none;
        }
    }
</style>
