const map = new Map();
let s = "helloworld";

for (let c of s) {
    if (map.has(c))
        map.set(c, map.get(c) + 1);
    else
        map.set(c, 1);
}

for (let key of map.keys()) {
    console.log(key + " " + map.get(key));
}