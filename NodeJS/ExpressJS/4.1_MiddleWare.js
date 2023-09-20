const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const date = new Date().getFullYear();
    console.log(method + " " + url + " " + date);
    //  res.send("TEst");//while using middleware either pass it on to the next or end it by res.send() 
    next();//by using next we pass it to the next middleware,here it the the "home"
    //now this logger can be used within any app.get()
}

module.exports = logger;