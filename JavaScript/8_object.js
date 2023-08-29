

const nationality = {
    country: "India"
};

const football = {
    name: "joel",
    jersey_no: 10,
    position: {
        choice_1: "forward",
        choice_2: "left_Wing"
    },
    clubs: ["Barca", "PSG"],
    salary: () => {
        return 10000 * 2;
    },//function as an object
    national: Object.create(nationality)

};
console.log(football.name + " " + football.jersey_no + " " + football.position.choice_1 + " " + football.clubs[0]
    + " " + football.salary())

console.log(football.national.country);//Inheritance

//Inheritance
const demo = {
    name: "joe"
}
let a = Object.create(demo);
console.log(a);
console.log(a.name);
a.name2 = "joel";
a.name3 = "joelll";
console.log(a);
//Inheritance does not add demo to a, it lets u use the data in demo(in java also)

//polymorphism
const sal = Object.create(football);
sal.salary = () => {
    return 10;
};
console.log(football.salary() + " " + sal.salary());
sal.name = "poopshu";
sal.jersey_no = "11";

console.log(football.name + " " + football.jersey_no)
console.log(sal.name + " " + sal.jersey_no);

//all values in the object
for (f in football) {
    console.log(football[f]);
}


