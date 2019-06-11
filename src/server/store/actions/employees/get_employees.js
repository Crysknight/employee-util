import { Employee } from 'models';
import { MUTATION_SET_EMPLOYEES } from 'shared/constants';

export default async ({ commit }) => {
    const employees = await Employee.find();
    const populatedEmployees = await Employee.populate(
        employees,
        [
            { path: 'skills.skill', select: '-_id' },
            { path: 'skills.rates.user', select: 'login -_id' },
            { path: 'avatar', select: 'path -_id' }
        ]
    );
    const formattedEmployees = populatedEmployees
        .filter(({ name }) => name)
        .map(employee => {
            const formattedEmployee = { ...employee.toObject() };

            if (employee.avatar) {
                formattedEmployee.avatar = employee.avatar.path;
            }

            formattedEmployee.skills = employee.skills.map(skill => {
                const formattedSkill = {
                    ...skill.toObject(),
                    name: skill.skill.name
                };
                delete formattedSkill.skill;
                delete formattedSkill.__v;
                formattedSkill.rates = skill.rates.map(rate => {
                    const formattedRate = {
                        ...rate.toObject(),
                        user: rate.user.login
                    };

                    return formattedRate;
                });

                return formattedSkill;
y                });

            return formattedEmployee;
        });

    commit(MUTATION_SET_EMPLOYEES, formattedEmployees);
};
