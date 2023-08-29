const fs = require("fs");
fs.readFile("./content/textFile.txt", "utf8", (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(result);
    const text = result;
    fs.writeFile("./content/newFile.txt", result, (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(result);
    });
});
//asynchronous means process happening parallely or at same time
//so asynchrounous is faster
//for example if a user is using the function the next function will be happening asynchrounously