<template>
    <div
        v-if="contextMenu"
        class="eu-context-menu"
        :style="contextMenuStyle"
        @click="stop"
    >
        <div class="eu-context-menu__options">
            <div
                v-for="(option, index) in options"
                class="eu-context-menu__option"
                :key="index"
                @click="emit(option.function)"
            >{{ option.text }}</div>
        </div>
    </div>
</template>

<script>
import { MUTATION_CLOSE_CONTEXT_MENU } from 'constants';

export default {
    name: 'EUContextMenu',
    computed: {
        coordinatesStyle() {
            const { x, y } = this.contextMenu.coordinates;
            return {
                left: `${x}px`,
                top: `${y}px`
            };
        },
        positionStyle() {
            const { position } = this.contextMenu;

            const top = position.match(/top/);
            const bottom = position.match(/bottom/);
            const left = position.match(/left/);
            const right = position.match(/right/);
            const centerVertical = position.match(/((left|right) center|center (left|right))/);
            const centerHorizontal = position.match(/((top|bottom) center|center (top|bottom))/);

            let translateX, translateY;

            if (left) {
                translateX = '-100%';
            } else if (centerHorizontal) {
                translateX = '-50%';
            } else if (right) {
                translateX = '0';
            }

            if (top) {
                translateY = '-100%';
            } else if (centerVertical) {
                translateY = '-50%';
            } else if (bottom) {
                translateY = '0';
            }

            return { transform: `translate(${translateX}, ${translateY}` };
        },
        contextMenuStyle() {
            const { coordinatesStyle, positionStyle } = this;

            return {
                ...coordinatesStyle,
                ...positionStyle
            };
        },
        options() {
            return this.contextMenu.options;
        },
        ...mapState('interface', ['contextMenu'])
    },
    methods: {
        stop(event) {
            event.stopPropagation();
        },
        emit(optionFunction) {
            this.MUTATION_CLOSE_CONTEXT_MENU();
            optionFunction();
        },
        ...mapMutations('interface', [MUTATION_CLOSE_CONTEXT_MENU])
    }
};
</script>

<style lang="scss">
    .eu-context-menu {
        display: flex;
        width: 250px;
        position: fixed;
        z-index: 50;
        background-color: white;

        &__options {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            width: 100%;
        }

        &__option {
            width: 100%;
            padding: 4px 8px;
            font-size: 14px;
            font-weight: 600;
            color: #5c9eff;
            cursor: pointer;
            &:hover {
                background-color: #5c9eff;
                color: white;
            }
        }
    }
</style>
