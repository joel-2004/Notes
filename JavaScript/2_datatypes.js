let a = 10;
let b = 10.05; //float is also considered as number
let b1 = 1.09;
console.log(b - b1);//It can still do arithmetic operations
console.log(a + " " + typeof a + " " + b + " " + typeof b);

let c = "joel";
let d = "j";
console.log(c + " " + typeof c + " " + d + " " + typeof d);

let e;
console.log(e + " " + typeof e);

let f = true;
console.log(f + " " + typeof f);

let j = null;
console.log(j);
console.log(null == undefined);

let k = Symbol("demo");
console.log(k); // no type of for symbol as it cannot be converted into String.
console.log(Symbol("demo") == k);// It returns false because Symbol("anything") cannot be equal to Symbol("anything")
//creates a unique value everytime it is created


const l = { name: "joel", dept: "IT", roll_no: 228 };
let m = "poopshu";
l.name = m;// changing value of data in an object
console.log(l.name + " " + l.dept + " " + l.roll_no);


//Array of Objects
const n = [{ name: "joel", dept: "IT", roll_no: 228 }]
console.log(n[0]);//use index to access values
console.log(n[0].name)


const date1 = new Date();
console.log(date1);// prints current date

const date = new Date("2022-05-23");//note the format 
console.log(date + " " + typeof date); //It is an Object