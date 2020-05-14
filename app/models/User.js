const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    auth: {
        username: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        }
    },
    name: {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        }
    }
})

module.exports = mongoose.model("users", userSchema)