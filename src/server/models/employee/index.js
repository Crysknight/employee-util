import { StandardModel } from '$utils';

import schema from './schema';

const Employee = new StandardModel('Employee', schema);
global.$Employee = Employee;

export default Employee;
