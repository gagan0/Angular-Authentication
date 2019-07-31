const express = require("express");
const mongoose = require("mongoose");
const User = require("../models/User");

const router = express.Router();

const db = "mongodb+srv://gagan:gagan@cluster0-muiyi.mongodb.net/AngularAuth?retryWrites=true&w=majority";

mongoose.connect(db, error =>
    {
        if(error)
        {
            console.log(error);
        }
        else
        {
            console.log("asdf");
        }
    });

router.get("/", (request, response) =>
{
    response.send("From API Route");
});

router.post("/register", (request, response) =>
{
    let userData = request.body;
    let user = new User(userData);

    user.save((error, registeredUser) =>
    {
        if(error)
        {
            console.log(error);
        }
        else
        {
            response.status(200).send(registeredUser);
        }
    })
});
module.exports = router;