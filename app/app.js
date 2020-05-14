// dependencies
const express = require("express");
const mongoose = require("mongoose")

// constants
const PORT = "8080"
const DATABASE_URL = "mongodb://localhost:27017/adboxdb"
const MONGOOSE_PARAMS = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}

// schemas 
const ObjectID = mongoose.Types.ObjectId

const User = require("./models/User.js")
const Post = require("./models/Post.js")

// objects
const app = express();

async function start() {
    try {
        await mongoose.connect(DATABASE_URL, MONGOOSE_PARAMS)
        app.listen(PORT, () => {
            console.log("Server has been started..")
        })
    }
    catch(e) {
        console.log("Error on connecting to database:")
        console.log(e)
    }
}

start()
