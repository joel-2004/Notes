const express = require("express");
const app = express();
let { people } = require("../content/product");
//setting static for post method
app.use(express.static("../content/methods-public"));

//HTTTP methods
app.get("/api/people", (req, res) => {//GET - reading data
    res.status(200).json({ success: true, data: people });
})

//POST - insert data
app.use(express.json());//to handle data to json format i.e parse JSON

//JS example - SEE THIS AFTER FORM EXAMPLE
//even though the url is same app.get() and app.post() are not the same
app.post("/api/people", (req, res) => {
    const { name } = req.body;
    if (!name) {
        res.status(400).json({ success: false, msg: "please provide some data" });
    }
    else
        res.status(201).json({ success: true, person: name });//axios in html file gives back all the data, we are adding name with it

})

//Form example - SEE THIS FIRST
app.use(express.urlencoded({ extended: false }))/*this is a built-in body parse 
Express body-parser is an npm library used to process data sent through an HTTP request body.
 It exposes four express middlewares for parsing text, JSON, url-encoded and raw data set through an HTTP request body.
 {extended:false} allows to choose between parsing the URL-encoded data with the querystring library
(when false) or the qs library (when true).
 */
app.post("/login", (req, res) => {
    console.log(req.body);
    const { name } = req.body;
    console.log(name);
    //res.send("Posted");

    if (name) {//instead of name === ""
        return res.status(200).send(`name ${name}`);
    }

    return res.status(404).send("Type a value");
})

//Using POSTMAN for API

app.post("/api/postman/people", (req, res) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ success: false, msg: "please enter a value" });
    }
    return res.status(200).json({ success: true, data: [...people, name] });
})

//PUT method - update data
app.put("/api/people/:id", (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    //console.log(id + " " + name);
    //res.json({ name: name, id: id })
    const person = people.find((p) => p.id === Number(id));
    if (!person) {
        return res.status(404).json({ success: false, msg: `no person with ${id}` });
    }
    //updating the name ,using map to iterate throught the array
    const newPeople = people.map((p) => {
        if (p.id === Number(id)) {
            p.name = name;
        }
        return p;
    })
    res.status(200).json({ success: true, data: newPeople });
})


//DELETE method
//there can be a same url for different methods,it sends a different request for different methods
app.delete("/api/people/:id", (req, res) => {
    const { id } = req.params;

    const person = people.find((p) => p.id === Number(id));
    if (!person) {
        return res.status(404).json({ success: false, msg: `no person with ${id}` });
    }
    const newPeople = people.filter((p) => {
        return p.id !== Number(id);
    })

    res.status(200).json({ success: true, data: newPeople });
})
app.listen(5000, () => {
    console.log("Listening at 5000");
})