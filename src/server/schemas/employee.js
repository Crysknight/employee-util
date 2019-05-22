const { Schema } = require('mongoose');

module.exports = Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    isMentor: Boolean,
    avatar: {
        type: String,
        default: 'default.png'
    },
    skills: [{
        skill: {
            type: Schema.Types.ObjectId,
            ref: 'Skill'
        },
        rates: [{
            user: {
                type: Schema.Types.ObjectId,
                ref: 'User'
            },
            value: {
                type: Number,
                min: 0,
                max: 10
            }
        }]
    }]
});
