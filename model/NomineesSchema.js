const mongoose = require('mongoose')

const schema = mongoose.Schema

const nominees = new schema(
    {
        Coordinator:
        {
            type: String
        },
        'Deputy coordinator & Director and patnership':
        {
            type: String
        },
        Secretary:
        {
            type: String
        },
        'Assistant Secretary':
        {
            type: String
        },
        'Programmes Officer':
        {
            type: String
        },
        'Financial Secretary':
        {
            type: String
        },
        Treasurer:
        {
            type: String
        },
        'Communications and Social Media Manager':
        {
            type: String
        }
    }, { timestamps: true }
)

module.exports = mongoose.model('Nominees', nominees)