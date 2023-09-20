const authorise = (req, res, next) => {
    console.log("Authorise");
    next();
}

module.exports = authorise;