<template>
    <div class="eu-employee-groups">
        <EUEmployeeGroup
            v-for="group in employeeGroups"
            :key="group.id"
            :group="group"
        />
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
        justify-content: flex-start;
        align-items: flex-start;
        flex-wrap: wrap;
        width: 100%;
        margin: 0 -10px;
    }
</style>
