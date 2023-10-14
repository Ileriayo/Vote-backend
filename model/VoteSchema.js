const mongoose = require('mongoose')

const schema = mongoose.Schema

const candidates = new schema(
    {
        position:
        {
            type: String,
            required: true
        },
        candidate1:
        {
            type: String,
            required: true
        },
        candidate2:
        {
            type: String,
            required: true
        },
        candidate3:
        {
            type: String,
            required: true
        },
        candidate4:
        {
            type: String,
            required: true
        },
        candidate5:
        {
            type: String,
            required: true
        }
    },{timestamps: true}
)

module.exports = mongoose.model('candidates',candidates)