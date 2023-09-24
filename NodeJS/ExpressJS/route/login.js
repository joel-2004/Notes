const express = require("express");
const router = express.Router();


router.post("/", (req, res) => {
    console.log(req.body);
    const { name } = req.body;
    console.log(name);
    if (name) {//instead of name === ""
        return res.status(200).send(`name ${name}`);
    }

    return res.status(404).send("Type a value");
})


module.exports = router;