const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose.connect(process.env.MONGODB_URI).then(() => console.log("connected to db")).catch(() => console.log("error in conneting to db"));

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }

})

const schemaColection = mongoose.model("schema", schema);

module.exports = schemaColection;

