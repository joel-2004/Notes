let arr = Array(26).fill(0);
let hm = new Map();
let str = "demodemohello";
let set = new Set();
//console.log(arr);


/*
//Sort Array

let tempArr = [2, 3, 1, 4, 5, 6, 10, 12];

tempArr.sort((a, b) => a - b);

console.log(tempArr);
*/





/*
for (const c of str) {
    console.log(c);
}

//Hashing using array and map
for (let i = 0; i < str.length; i++) {
    arr[str.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    if (hm.has(str.charAt(i))) {
        let temp = hm.get(str.charAt(i));
        temp++;
        hm.set(str.charAt(i), temp);
    }
    else {
        hm.set(str.charAt(i), 1);
    }
}

console.log(arr);
console.log(hm);

hm.forEach((value, key) => {
    console.log(key + " " + value);
})

for (const key of hm.keys()) {
    console.log(key + " " + hm.get(key));
}

*/





/*
//set

for (const c of str) {
    set.add(c);
}

console.log(set);
*/







