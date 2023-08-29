const obj = {
    name: "joel",
    age: 19,
    dept: "IT"
};
window.sessionStorage.setItem("s", JSON.stringify(obj));
const get = window.sessionStorage.getItem("s");
console.log(get);

const parsed = JSON.parse(get);
console.log(parsed);
console.log(parsed.name)
