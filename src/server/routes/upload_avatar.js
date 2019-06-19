import path from 'path';
import mongoose from 'mongoose';
import formidable from 'formidable';

import { Avatar, Employee } from '$models';
import { SERVER_PATH, AVATARS_PATH } from '$constants';

const { ObjectId } = mongoose.Types;

export default async (req, res) => {
    const form = formidable.IncomingForm();

    form.encoding = 'utf-8';
    form.uploadDir = AVATARS_PATH;
    form.keepExtensions = true;
    form.parse(req, async (error, fields, files) => {
        if (error) {
            res.status(500).send('error occured', error);
        } else {
            const { employeeId } = fields;
            const { avatar } = files;

            const employee = await Employee.findById(employeeId);
            if (employee) {
                if (employee.avatar) {
                    const oldAvatar = await Avatar.findById(employee.avatar);
                    await oldAvatar.remove();
                }

                const filePath = path.relative(SERVER_PATH, avatar.path);
                const newAvatar = new Avatar({
                    path: path.resolve('/', filePath),
                    name: avatar.name,
                    size: avatar.size,
                    employee: ObjectId(employeeId)
                });
                await newAvatar.save();

                employee.avatar = newAvatar._id;
                await employee.save();

                res.status(200).send(filePath);
            } else {
                res.status(400).send('no such employee');
            }
        }
    });
};
