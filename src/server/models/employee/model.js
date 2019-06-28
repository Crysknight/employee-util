import passwordHash from 'password-hash';
import jwt from 'jsonwebtoken';

import { objectClone } from '$shared/utils';
import { StandardModel } from '$utils';
import { TOKEN_SECRET } from '$constants';

export default class EmployeeModel extends StandardModel {
    toClient(document) {
        const formatted = super.toClient(document);

        delete formatted.password;
        delete formatted.token;

        return formatted;
    }

    async create(data) {
        const clonedData = this.clonedDataWithPassword(data);

        return super.create(clonedData);
    }

    async update(id, data) {
        const clonedData = this.clonedDataWithPassword(data);

        return super.update(id, clonedData);
    }

    clonedDataWithPassword(data) {
        const clonedData = objectClone(data);

        if (clonedData.password) {
            clonedData.password = passwordHash.generate(clonedData.password);
        }

        return clonedData;
    }

    async login(login, password) {
        const employee = await this.Model.findOne({ login });

        if (
            !employee ||
            !employee.password ||
            !passwordHash.verify(password, employee.password)
        ) {
            return false;
        }

        const token = jwt.sign({ id: employee._id }, TOKEN_SECRET);

        employee.token = token;
        await employee.save();

        return employee.toClient();
    }

    async logout(token) {
        const employee = await this.Model.findOne({ token });
        if (employee) {
            delete employee.token;
            await employee.save();
        }
    }
}
