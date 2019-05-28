<template>
    <div
        class="eu-file-input"
    >
        <EUButton
            class="eu-file-input__button"
            small
            noShadow
            type="button"
            @click="triggerInput"
        >Аватар</EUButton>
        <div
            v-if="value"
            class="eu-file-input__name"
        >{{ fileName }}</div>
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
    props: {
        value: File
    },
    computed: {
        fileName() {
            const { name } = this.value;
            if (name.length > 30) {
                return name
                    .substr(0, 30)
                    .trim();
            }

            return name;
        }
    },
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
        align-items: center;
        min-width: 150px;
        margin: 12px 0;
        padding-right: 10px;
        border: 1px solid #92beff;
        border-radius: 3px;

        &__button {
            flex-shrink: 0;
            margin-right: 4px;
        }

        &__input {
            display: none;
        }

        &__name {
            font-size: 14px;
        }
    }
</style>
