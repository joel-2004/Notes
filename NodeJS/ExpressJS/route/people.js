const express = require("express");
const { getPeople, postPeople, postPeoplePostman, putPeople, deletePeople } = require("../controller/peopleFunction");

const router = express.Router();
let { people } = require("../../content/product");

/*
router.get("/", getPeople)
router.post("/", postPeople)
router.post("/postman", postPeoplePostman)
router.put("/:id", putPeople)
router.delete("/:id", deletePeople)
*/

//another method to do the same above functions
router.route("/").get(getPeople).post(postPeople);
router.route("/postman").post(postPeoplePostman);
router.route("/:id").put(putPeople).delete(deletePeople);
//both does the same functions

module.exports = router;