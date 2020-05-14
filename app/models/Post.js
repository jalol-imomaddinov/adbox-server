const mongoose = require("mongoose")
const Schema = mongoose.Schema

const postSchema = new Schema({
    _id: mongoose.Types.ObjectId,
    title: String,
    description: String,
    hashtags: String,
    rating: Number,
    contacts: {
        phone: Number,
        telegram: String
    }
})

module.exports = mongoose.model("posts", postSchema)