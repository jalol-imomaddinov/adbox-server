// constants
const DATABASE_URL = "mongodb://localhost:27017/adboxdb"
// dependencies
const express = require("express");
const mongoose = require("mongoose")
// objects
const server = express();

function connectDb() {
    mongoose.connect(
        DATABASE_URL,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
        (err) => {
            if (err) console.log("err: " + err)
        }
    ).then(() => {
        console.log("Successfuly connected!")
    })
}