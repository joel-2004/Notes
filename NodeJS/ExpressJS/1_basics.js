const express = require("express");
const app = express();

//app.get read data from user
//app.post insert data
//app.put update data
//app.delete delete data
app.get("/", (req, res) => {
    res.status(200).send("<h1>Home page</h1>");//can pass string,html
})

app.get("/about", (req, res) => {
    res.status(200).send("About page");
})

app.all("*", (req, res) => {//using all for ALL the url's or gets that are not found
    res.status(404).send("Error page");//chaining a status code 
})

app.listen(5000, () => {
    console.log("Listening at port 5000");
})