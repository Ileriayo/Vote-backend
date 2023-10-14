const mongoose = require('mongoose');

const schema = mongoose.Schema

const tempauth = new schema({
    email:
    {
        type : String,
        required: true
    },
    password:
    {
        type : String,
        required : true
    },
    otp:
    {
        type : String,
        required : true
    }
},{timestamps: true})

module.exports = mongoose.model('TempAuth',tempauth)