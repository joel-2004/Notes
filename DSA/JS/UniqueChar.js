let str = "eababacadqw";

let map = new Map();

for (let c of str) {
    if (map.has(c)) {
        map.set(c, map.get(c) + 1);
    }
    else {
        map.set(c, 1);
    }
}

// console.log(map);

for (let key of map.keys()) {
    if (map.get(key) == 1)
        console.log(key);
}
