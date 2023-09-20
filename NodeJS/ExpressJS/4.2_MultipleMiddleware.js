const authorise = (req, res, next) => {
    const { user } = req.query;
    if (user == "joel") {
        req.user = ({ name: "joel", id: 1 });//attaching properties to a middleware
        //http://localhost:5000/?user=joel only this is authorised
        next();
    }
    // console.log("Authorise");
    // next();
    else {
        res.status(404).send("Unauthorised");
    }
}

module.exports = authorise;