const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("./content"));
/*to fix the issue of /img, /script, /css , we pass in the folder name 
usually it is public as a naming convention, we have used content 
*/
// app.get("/", (req, res) => {
//     // res.status(200).send("Home page");
//     res.sendFile(path.resolve(__dirname, "./content/index.html"));//to read from a HTML file
//another way is adding to static asset, now since we used app.use(express.static("./content")); it automatically finds index.html
//another method would be SSR server side rendering using template engine
// })

app.all("*", (req, res) => {
    res.status(404).send("err");
})

app.listen(5000, () => {
    console.log("Listening at 5000");
})