const name1 = document.getElementById("nameLabel");
console.log(name1);
name1.style.backgroundColor = "red";

const name2 = document.querySelector("#name");
console.log(name2);
name2.style.backgroundColor = "yellow";

const age1 = document.getElementsByClassName("ageLabel");//returns array of objects
console.log(name1);

function mouseDown() {
    document.getElementById("nameLabel").innerHTML = "<h2>Haha<h2>";
}//when clicked

function mouseUp() {
    let val = document.getElementById("age");
    let age = document.getElementById("ageLabel").innerText = val.value;//we can use .value here also
}



