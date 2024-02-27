//imports
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const schema = require("./db");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

//middlewares
app.use(cors({
    origin: ["http://localhost:3000"],
    credentials: true
}));

app.use(express.json());
dotenv.config();
app.use(cookieParser());

//home
app.get("/", (req, res) => {
    res.json({ "message": "hello world" });
})


//signup
app.post("/signup", async (req, res) => {
    //  console.log(req.body);
    const name = req.body.name;
    const find = await schema.find({ name });
    //console.log(find);
    if (find.length === 1) {
        console.log("demo");
        return res.status(200).json({ "message": "user aldready exists" });
    }

    const hashPassword = await bcrypt.hash(req.body.password, 10);
    // console.log(find + " " + hashPassword);
    const result = await schema.insertMany({ name: req.body.name, password: hashPassword });
    console.log(result);
    return res.status(200).json(result);
})


//login
app.post("/login", async (req, res) => {
    //console.log(req.body);
    // console.log(process.env.ACCESS_TOKEN);
    const { name, password } = req.body;

    const user = await schema.findOne({ name });
    // console.log(user);
    if (!user) {
        return res.status(404).json({ "message": "no user found" });

    }

    const validPassword = await bcrypt.compare(password, user.password);
    // console.log(validPassword);
    if (!validPassword) {
        return res.status(403).json({ "message": "invalid password" });
    }

    const token = jwt.sign({ username: user.name }, process.env.ACCESS_TOKEN, { expiresIn: '1h' });
    //console.log(token);
    res.cookie("token", token, { httpOnly: true, maxAge: 360000 });
    return res.status(200).json({ "message": "valid username and password" });

})


//middleware
const verifyUser = async (req, res, next) => {
    // console.log("hiiii");
    try {
        const token = req.cookies.token;
        //   console.log(token);
        if (!token) {
            return res.status(403).json({ "message": "no token" });
        }
        const verifyToken = await jwt.verify(token, process.env.ACCESS_TOKEN);
        //  console.log(verifyToken);
        next();
    } catch (error) {
        console.log(error);
        return res.status(404).json({ "message": error });
    }
}

//auth dashboard
app.get("/auth", verifyUser, (req, res) => {
    // console.log("demo");
    return res.status(200).json({ "message": "verified" });
})

//logout
app.get("/logout", (req, res) => {
    res.clearCookie("token");
    return res.status(200).json({ "message": "logout" });

})
//server
app.listen(process.env.PORT, (req, res) => {
    console.log(`Listening at post ${process.env.PORT}`);
})




