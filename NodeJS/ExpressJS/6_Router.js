const express = require("express");
const app = express();
const people = require("./route/people");//getting the router from people.js
const login = require("./route/login");

app.use(express.static("../content/methods-public"));
app.use(express.urlencoded({ extended: false }))
app.use(express.json());

app.use("/login", login);
app.use("/api/people", people);//apply to the ones that has /api/people



app.listen(5000, () => {
    console.log("Listening at 5000");
})