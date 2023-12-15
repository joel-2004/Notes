/* callback - series of function calls one after another .

function add(a, b, sub) {
  sub(a, b, mul);
  console.log(a + b);
}
function sub(a, b) {
  mul(div);
  console.log(a - b);
}
function div() {
  modulo();
}
add(10, 5, sub);
*/

/* Promises
// const myPromise = new Promise((resolve, reject) => {
//   let promise = false;
//   if (promise) resolve("Yes ! promise was kept");
//   else reject("No! the promise is nt kept");
// });

// console.log(myPromise);
// const result = myPromise
//   .then((value) => {
//     return value;
//   })
//   .then((newValue) => console.log(newValue))
//   .catch((err) => console.log(err));
*/

/*

// Promises pending status

const users = fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((values) =>
    values.forEach((element) => {
      console.log(element);
    })
  );

*/
//Async & await

const user = async () => {
    const returedPromises = await fetch(
        "https://jsonplaceholder.typicode.com/users"
    );
    const userData = await returedPromises.json();
    printUser(userData);
};

const printUser = (userData) => {
    userData.forEach((element) => {
        console.log(element);
    });
};

user();