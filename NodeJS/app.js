const { readFile } = require("fs");
const getText = (path) => {
    return new Promise((resolve, reject) => {/*A promise is basically an advancement of callbacks in Node.  
        In other words, a promise is a JavaScript object which is used to handle all the asynchronous data operations.
         While developing an application you may encounter that you are using a lot of nested callback functions.*/
        readFile(path, "utf-8", (res, err) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(res);
            }
        })
    })
}
//getText("./content/textFile.txt").then(res => console.log(res)).catch((err) => console.log(err));

const start = async () => {
    try {
        const first = await getText("./content/textFile.txt");
        const second = await getText("./content/newFile.txt")
        console.log(first);
    } catch (error) {
        console.log(error);
    }
}
