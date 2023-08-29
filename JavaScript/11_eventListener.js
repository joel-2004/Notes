const h1 = document.querySelector("h1");
console.log(h1);
function fun() {
    alert("haha it works");
}
h1.addEventListener("click", fun());

h1.addEventListener("click", (event) => {
    h1.style.backgroundColor = "red";
});
const age = document.getElementById("age");
age.addEventListener("change", (event) => {
    age.style.rotate = "270deg";
});