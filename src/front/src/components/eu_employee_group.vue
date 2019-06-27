<template>
    <div class="eu-employee-group" @click="goToEmployeeGroup">
        <div class="eu-employee-group__name">{{ group.name }}</div>
        <div class="eu-employee-group__employee-count">{{ employeeCountString }}</div>
    </div>
</template>

<script>
export default {
    name: 'EUEmployeeGroup',
    props: {
        group: {
            type: Object,
            required: true
        }
    },
    computed: {
        employeeCountString() {
            const employeeCount = this.employeeCountByGroup(this.group.id);
            return `Количество сотрудников: ${employeeCount}`;
        },
        ...mapGetters('employees', ['employeeCountByGroup'])
    },
    methods: {
        goToEmployeeGroup() {
            this.$router.push({
                name: 'employees',
                params: { groupId: this.group.id }
            });
        }
    }
};
</script>

<style lang="scss">
    .eu-employee-group {
        display: flex;
        margin: 10px;
        width: calc(50% - 20px);
        min-height: 70px;
        position: relative;
        border-radius: 3px;
        background-color: white;
        box-shadow:
            0 3px 5px rgba(0, 0, 0, 0.2),
            0 0 8px rgba(0, 0, 0, 0.15);
        cursor: pointer;

        &__name {
            margin-bottom: 15px;
            padding: 5px 15px;
            font-size: 20px;
        }

        &__employee-count {
            display: flex;
            justify-content: flex-end;
            width: 100%;
            position: absolute;
            padding: 3px 15px;
            bottom: 0;
            left: 0;
        }
    }
</style>
