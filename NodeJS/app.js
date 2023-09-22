const express = require("express");
const app = express();
let { people } = require("./content/product");
//setting static for post method
app.use(express.static("./content/methods-public"));

//HTTTP methods
app.get("/api/people", (req, res) => {//GET - reading data
    res.status(200).json({ success: true, data: people });
})

//POST - insert data

app.post("/login", (req, res) => {
    res.send("Posted");
})
app.listen(5000, () => {
    console.log("Listening at 5000");
})