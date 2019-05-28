<template>
    <div class="eu-skill">
        <div class="eu-skill__title">{{ skill.name }}</div>
        <div class="eu-skill__progressbar">
            <div
                v-for="section in 10"
                class="eu-skill__progressbar-section"
                :key="section"
                :title="section"
                @click="rate(section)"
            ></div>
            <div
                ref="progress"
                class="eu-skill__progressbar-progress"
                :style="progressStyle"
            ></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'EUEmployeeSkill',
    props: {
        skill: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            isMounted: false
        };
    },
    computed: {
        averageRate() {
            const { rates } = this.skill;
            return rates.reduce((rate, { value }) => (rate + value), 0) / rates.length;
        },
        progressStyle() {
            if (!this.isMounted) {
                return false;
            }

            const { averageRate } = this;
            const { progress } = this.$refs;
            const progressBar = progress.parentElement;
            const barWidth = progressBar.clientWidth;

            const progressWidth = `${barWidth * averageRate / 10}px`;

            return { width: progressWidth };
        }
    },
    mounted() {
        this.isMounted = true;
    },
    methods: {
        rate(rate) {
            this.$emit('rate', rate);
        }
    }
};
</script>

<style lang="scss">
    .eu-skill {
        display: flex;
        flex-direction: column;
        flex-shrink: 0;
        width: 100%;
        max-width: 150px;
        margin-bottom: 15px;
        margin-right: 15px;

        &__title {
            margin-bottom: 4px;
            font-size: 14px;
        }

        &__progressbar {
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            width: 100%;
            max-width: 150px;
            height: 15px;
            position: relative;
            border: 1px solid #666666;
            border-radius: 3px;
            overflow: hidden;
            background-color: white;
        }

        &__progressbar-section {
            width: 10%;
            height: 15px;
            z-index: 2;
            border: 1px solid #666666;
            border-left: none;
            opacity: 0.3;
            cursor: pointer;

            &:first-child {
                border-left: 1px solid #666666;
                border-radius: 3px 0 0 3px;
            }

            &:last-child {
                border-radius: 0 3px 3px 0;
            }
        }

        &__progressbar-progress {
            height: 30px;
            position: absolute;
            left: 0;
            top: 0;
            z-index: 0;
            background-color: #44bb33;
        }
    }
</style>
