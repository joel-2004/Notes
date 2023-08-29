const body = document.getElementById("body").innerHTML;
console.log(body);
const form = document.body.childNodes[1];
console.log(form.childNodes[0]);
console.log(form.lastChild);

form.style.backgroundColor = "red";
const p = document.body.lastChild;
console.log(body.lastChild)
p.style.backgroundColor = "yellow";
