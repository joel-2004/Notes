let a = 10;
console.log(a + " " + typeof a);
let b = String(a);
console.log(b + " " + typeof b);

let c = "10.20";
let d = "20.30";
console.log(parseInt(c) + parseInt(d));//String in converted into int
console.log(parseFloat(c) + parseFloat(d));//String in converted into float
console.log(parseInt(3, c));//changes the calue of c to the first parameter

let e = new Date();
console.log(e);// prints current date
console.log(Number(e));//milliseconds
console.log(Boolean(0));

let f = 2;
let g = 2;
console.log(f ** g);// ** is power in javascript. The above code prints 2 to the power of 2 i.e(4)