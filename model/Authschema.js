const mongoose = require('mongoose')

const schema = mongoose.Schema

const create = new schema(
    {
        email:{
            type: String,
            required : true
        },
        password: {
            type : String,
            required : true
        }
    }
)

module.exports = mongoose.model("VoteAuth",create)