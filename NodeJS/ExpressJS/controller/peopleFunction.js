let { people } = require("../../content/product");

const getPeople = (req, res) => {//GET - reading data
    res.status(200).json({ success: true, data: people });
}

const postPeople = (req, res) => {
    const { name } = req.body;
    if (!name) {
        res.status(400).json({ success: false, msg: "please provide some data" });
    }
    else
        res.status(201).json({ success: true, person: name });//axios in html file gives back all the data, we are adding name with it

}


const postPeoplePostman = (req, res) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ success: false, msg: "please enter a value" });
    }
    return res.status(200).json({ success: true, data: [...people, name] });
}

const putPeople = (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    console.log(id + " " + name);
    //res.json({ name: name, id: id })
    const person = people.find((p) => p.id === Number(id));
    if (!person) {
        return res.status(404).json({ success: false, msg: `no person with ${id}` });
    }
    //updating the name ,using map to iterate throught the array
    const newPeople = people.map((p) => {
        if (p.id === Number(id)) {
            p.name = name;
        }
        return p;
    })
    res.status(200).json({ success: true, data: newPeople });
}


const deletePeople = (req, res) => {
    const { id } = req.params;

    const person = people.find((p) => p.id === Number(id));
    if (!person) {
        return res.status(404).json({ success: false, msg: `no person with ${id}` });
    }
    const newPeople = people.filter((p) => {
        return p.id !== Number(id);
    })

    res.status(200).json({ success: true, data: newPeople });
}


module.exports = { getPeople, postPeople, postPeoplePostman, putPeople, deletePeople };