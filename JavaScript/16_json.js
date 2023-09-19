/*
JSON stands for JavaScript Object Notation
JSON is a lightweight data-interchange format
JSON is plain text written in JavaScript object notation
JSON is used to send data between computers
JSON is language independent *
*/
const obj = {
    name: "Joel",
    age: 19,
    dept: "IT"
}
console.log(obj);
const send = JSON.stringify(obj);//the js object is converted into a json text
console.log(send);

const recieve = JSON.parse(send);//the json text is converted into a js obj
console.log(recieve);