const express = require("express");
const app = express();
const { products } = require("../NodeJS/content/product")
app.get("/", (req, res) => {
    // res.json(products)
    res.send(`<h1>Home Page</h1>  <a href="/api/products">Link</a>`)
})

app.get("/api/products", (req, res) => {
    const newProduct = products.map((p) => {
        const { id, name, image } = p;
        return { id, name, image };
    })
    res.send(newProduct);
})

app.get("/api/products/1", (req, res) => {
    const newProduct = products.find((p) => p.id == 1);

    res.send(newProduct);
})

app.listen(5000, () => {
    console.log("Listening 5000");
})