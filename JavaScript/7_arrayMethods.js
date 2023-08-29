let arr = [1, 2, 4, 3, 9, 7];
let str = ["joel", "neymar", "messi"];

arr.push(12);//add at the end of an array
console.log(arr.push(13), arr);//prints the index at which it is added

console.log(arr.pop(), arr);// prints the popped element




console.log(arr.unshift(12), arr);//add elemet in the beginning of the array
console.log(arr.shift(), arr);//remove element at the beginning of the array
//while printing it returns the element that is shifted out
console.log(arr.toString())
/*
 sort() method in Js genarally designed to sort th strings

 So,we can't normally apply sort on Number to perform sort opeartion on 
 numbers we need to write a comaprator inside the sort function
 */
str.sort();
console.log(str);
str.reverse();
console.log(str);


//Array Sort small to big
console.log(
    arr.sort(function (a, b) {
        return a - b;
    })
);
str.reverse();
console.log(str);
//splice (used in string and number)
//to delete .splice(index to start deleting from,no of elements from the index to dlt)
str.splice(1, 1);
console.log(str);

//to add .splice(index to start adding from,no of elements to add,elements...)
console.log(arr);
arr.splice(2, 3, 66, 666, 666);// this replaces the number(It overides the data)
console.log(arr);

//forEach(value,index,array)
function fore(value, index, arr) {
    console.log(value + " " + index + " " + arr);
}

//.map .filter tc like Java 8
arr.forEach(fore);
let sum = 0;
function ele(value) {
    console.log(value);
}
arr.forEach(ele);

function myFunction(value) {
    return value > 10;
}
console.log(arr, arr.find(myFunction));//finds the first element .findIndex

