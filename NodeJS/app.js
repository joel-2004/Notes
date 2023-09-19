const express = require("express");
const app = express();
// req =>middleware=>response
//a middleware does something inbetween the request and response

app.get("/", (req, res) => {
    res.end("Home");
})

app.get("/about", (req, res) => {
    res.end("about");
})
app.listen((5000), () => {
    console.log("Listening at 5000");
})