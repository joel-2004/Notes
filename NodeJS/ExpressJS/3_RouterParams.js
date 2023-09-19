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

// app.get("/api/products/1", (req, res) => {
//     const newProduct = products.find((p) => p.id == 1);

//     res.send(newProduct);
// })
//to search based on product id insted of coding each persons id we use route param 
app.get("/api/products/:productID", (req, res) => {
    const { productID } = req.params;
    const newProduct = products.find((p) => p.id == Number(productID));//type casting because productID returns a string

    if (!newProduct)//if the id is not present or given something random like /api/products/sdlksada
    {
        return res.status(404).send("ID not found");
    }
    res.send(newProduct);
})

app.get("/api/v1/query", (req, res) => {//http://localhost:5000/api/v1/query?id=1&&name=%22john%22
    console.log(req.query)
    //in console:{ id: '1', name: '"john"' }
    const { search, limit } = req.query;
    let newProduct = [...products];
    if (search) {
        newProduct = newProduct.filter((p) => { return p.name.startsWith(search) });
    }
    if (limit) {
        newProduct = newProduct.slice(0, Number(limit));
    }
    if (newProduct.length == 0) {
        //res.send("No data match");
        return res.status(200).json({ sucess: false, data: [] });//adding return so the response stops here itself

    }
    res.status(200).json(newProduct);
    res.send("ehello");
})
app.listen(5000, () => {
    console.log("Listening 5000");
})