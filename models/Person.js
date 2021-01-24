const mongoose = require('mongoose')

// Person SCHEMA
const PersonSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        age: {
            type: Number
        },
        favoriteFoods: {
            type: Array
        }
    }
)

module.exports = mongoose.model('Person', PersonSchema)