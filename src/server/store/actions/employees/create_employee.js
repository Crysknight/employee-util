import mongoose from 'mongoose';

import { Employee, Skill } from 'models';
import { MUTATION_CREATE_EMPLOYEE } from 'shared/constants';

const { ObjectId } = mongoose.Types;

export default async ({ commit }, employeeData) => {
    const employee = new Employee(employeeData);
    const skills = await Skill.find();
    employee.skills = skills.map(skill => {
        return {
            skill: ObjectId(skill._id),
            rates: []
        };
    });
    await employee.save();

    const populatedEmployee = await Employee.populate(
        employee,
        [
            { path: 'skills.skill', select: '-id' },
            { path: 'skills.rates.user', select: 'login -id' }
        ]
    );

    const formattedEmployee = populatedEmployee.toObject();
    formattedEmployee.skills = formattedEmployee.skills.map(skill => {
        const formattedSkill = {
            ...skill,
            name: skill.skill.name
        };
        delete formattedSkill.skill;
        delete formattedSkill.__v;

        return formattedSkill;
    });

    commit(MUTATION_CREATE_EMPLOYEE, formattedEmployee);
};
