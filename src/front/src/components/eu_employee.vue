<template>
    <div :class="['eu-employee', employeeClasses]">
        <div
            v-if="employee.isMentor"
            class="eu-employee__mentor-star"
            title="Является ментором"
        ></div>
        <div class="eu-employee__header">
            <div class="eu-employee__name">{{ employee.name }}</div>
        </div>
        <div class="eu-employee__body">
            <div class="eu-employee__avatar" :style="avatarStyle"></div>
            <div class="eu-employee__skills">
                <EUSkill
                    v-for="skill in employee.skills"
                    :key="skill._id"
                    :skill="skill"
                    @rate="rateSkill({ employee, skill, value: $event })"
                />
            </div>
        </div>
    </div>
</template>

<script>
import EUSkill from './eu_skill';

export default {
    name: 'EUEmployee',
    components: { EUSkill },
    props: {
        employee: {
            type: Object,
            required: true
        }
    },
    computed: {
        employeeClasses() {
            return {
                'eu-employee--mentor': this.employee.isMentor
            };
        },
        avatarStyle() {
            return {
                backgroundImage: `url(${this.employee.avatar})`
            };
        }
    },
    methods: {
        ...mapActions('employees', ['rateSkill'])
    }
};
</script>

<style lang="scss">
    .eu-employee {
        display: flex;
        flex-direction: column;
        width: 25%;
        position: relative;
        margin: 0 10px;
        padding: 15px;
        border-radius: 2px;
        background-color: white;
        box-shadow: 0 0 5px rgba(50, 50, 50, 0.3);
        overflow: hidden;
        &--mentor {
            background-color: #e0e0fb;
        }

        &__mentor-star {
            width: 270px;
            height: 270px;
            position: absolute;
            right: -70px;
            top: -20px;
            z-index: 2;
            transform: rotate(20deg);
            opacity: 0.8;
            background-image: url(~assets/star.svg);
            background-size: contain;
            background-repeat: no-repeat;
        }

        &__header, &__body {
            display: flex;
            justify-content: flex-start;
            width: 100%;
            z-index: 5;
        }

        &__header {
            align-items: center;
        }

        &__body {
            align-items: flex-start;
        }

        &__name {
            width: 100%;
            margin-bottom: 15px;
            font-size: 20px;
        }

        &__avatar {
            flex-shrink: 0;
            width: 100px;
            height: 100px;
            margin-right: 15px;
            border-radius: 2px;
            background-color: #666666;
            background-size: cover;
            background-position: center;
        }

        &__skills {
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            flex-wrap: wrap;
            width: 100%;
        }
    }
</style>
