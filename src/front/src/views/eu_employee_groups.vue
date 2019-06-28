<template>
    <div class="eu-employee-groups">
        <div class="eu-employee-groups__title">Группы</div>
        <div class="eu-employee-groups__groups">
            <EUEmployeeGroup
                v-for="group in employeeGroups"
                :key="group.id"
                :group="group"
            />
        </div>
    </div>
</template>

<script>
import { EUEmployeeGroup } from 'components';

export default {
    name: 'EUEmployeeGroups',
    components: { EUEmployeeGroup },
    computed: {
        ...mapState('employeeGroups', ['employeeGroups'])
    }
};
</script>

<style lang="scss">
    .eu-employee-groups {
        display: flex;
        flex-direction: column;

        &__title {
            width: 100%;
            margin-bottom: 5px;
            font-size: 26px;
            font-weight: bold;
            text-transform: uppercase;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
            color: white;
        }

        &__groups {
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            flex-wrap: wrap;
            width: 100%;
            margin: 0 -10px;
        }
    }
</style>
