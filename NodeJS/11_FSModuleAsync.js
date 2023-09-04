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

/*
Asynchronous JavaScript: Asynchronous code allows the program to be executed immediately
 where the synchronous code will block further execution of the remaining code until it finishes
 the current one. This may not look like a
 big problem but when you see it in a bigger picture you realize that it may lead to delaying the User Interface.*/
//asynchronous means process happening parallely or at same time
//so asynchrounous is faster
//for example if a user is using the function the next function will be happening asynchrounously