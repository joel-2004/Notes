const express = require("express");
const app = express();
// req =>middleware=>response
//a middleware does something inbetween the request and response

const logger = require("./ExpressJS/4_1_MiddleWare");
const authorise = require("./ExpressJS/4_2_MultipleMiddleware");
//app.get("/", logger, (req, res) => {}  instead of using it like this we can simply use
// app.use(logger)//this will pass the logger for all the app.get()
// app.use("/demo", logger);
//  /demo/demo1  ,  /demo/asdsad  this logger will work for any route that comes after /demo


//for multiple middleware
app.use([logger, authorise]);//the order of middleware matter,if "logger" is passed first it executes first
app.get("/", (req, res) => {//express passes the req,res in middleware

    res.end("Home");
})

app.get("/about", (req, res) => {
    res.end("about");
})

app.get("/products", (req, res) => {
    res.send("product");
})
app.listen((5000), () => {
    console.log("Listening at 5000");
})