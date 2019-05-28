const formidable = require('formidable');
const path = require('path');
const { ObjectId } = require('mongoose').Types;

const { Avatar, Employee } = require('../models');

module.exports = async (req, res) => {
    const form = formidable.IncomingForm();

    form.encoding = 'utf-8';
    form.uploadDir = path.resolve(__dirname, '../static/userpics');
    form.keepExtensions = true;
    form.parse(req, async (error, fields, files) => {
        if (error) {
            res.status(500).send('error occured', error);
        } else {
            const { employeeId } = fields;
            const { avatar } = files;

            const employee = await Employee.findById(employeeId);
            if (employee) {
                const filePath = path.relative('/vagrant/src/server', avatar.path);
                const newAvatar = new Avatar({
                    path: path.resolve('/', filePath),
                    name: avatar.name,
                    size: avatar.size,
                    employee: ObjectId(employeeId)
                });
                await newAvatar.save();

                employee.avatar = newAvatar._id;
                await employee.save();

                res.status(200).send('avatar received');
            } else {
                res.status(400).send('no such employee');
            }
        }
    });
};
