const mongoose = require('mongoose')

const schema = mongoose.Schema

const yaleRecord = new schema(
    {
        email:
        {
            type : String,
            required: true
        },
        fname:
        {
            type : String,
            required : true
        },
        lname:
        {
            type : String,
            required : true
        },
        phone:
        {
            type: String,
            required : true
        }
    }, { timestamps: true }
)

module.exports = mongoose.model('yaleRecord', yaleRecord)