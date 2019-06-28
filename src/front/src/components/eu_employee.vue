<template>
    <div
        :class="['eu-employee', employeeClasses]"
        @click="handleEmployeeClick"
    >
        <div
            v-if="employee.isMentor"
            class="eu-employee__mentor-star"
            title="Является ментором"
        ></div>
        <div class="eu-employee__header">
            <div class="eu-employee__name">{{ employee.name }}</div>
            <div
                v-if="isDeleteModeOn"
                :class="['eu-employee__delete-mark', deleteMarkClasses]"
            ></div>
        </div>
        <div class="eu-employee__body">
            <div class="eu-employee__avatar" :style="avatarStyle"></div>
            <div class="eu-employee__measures">
                <EUMeasure
                    v-for="measure in employee.measures"
                    :key="measure.id"
                    :measure="measure"
                    @rate="rateEmployee({
                        employeeId: employee.id,
                        measureId: measure.id,
                        value: $event
                    })"
                />
            </div>
        </div>
    </div>
</template>

<script>
import { MUTATION_TOGGLE_EMPLOYEE_DELETION } from 'constants';

import EUMeasure from './eu_measure';

export default {
    name: 'EUEmployee',
    components: { EUMeasure },
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
        },
        deleteMarkClasses() {
            return {
                'eu-employee__delete-mark--checked': this.isEmployeeToDelete(this.employee)
            };
        },
        ...mapState('employees', ['isDeleteModeOn']),
        ...mapGetters('employees', ['isEmployeeToDelete'])
    },
    methods: {
        handleEmployeeClick() {
            this.MUTATION_TOGGLE_EMPLOYEE_DELETION(this.employee);
        },
        ...mapMutations('employees', [MUTATION_TOGGLE_EMPLOYEE_DELETION]),
        ...mapActions('employees', ['rateEmployee'])
    }
};
</script>

<style lang="scss">
    .eu-employee {
        display: flex;
        flex-direction: column;
        width: calc(33.33% - 20px);
        position: relative;
        margin: 10px;
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
            align-items: flex-start;
        }

        &__body {
            align-items: flex-start;
        }

        &__name {
            width: 100%;
            margin-bottom: 15px;
            font-size: 20px;
        }

        &__delete-mark {
            flex-shrink: 0;
            width: 20px;
            height: 20px;
            position: relative;
            border: 1px solid #92beff;
            border-radius: 10px;
            background-color: white;
            &--checked:before {
                content: '';
                width: 14px;
                height: 14px;
                position: absolute;
                left: 2px;
                top: 2px;
                border-radius: 7px;
                background-color: #92beff;
            }
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

        &__measures {
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            flex-wrap: wrap;
            width: 100%;
        }
    }
</style>
