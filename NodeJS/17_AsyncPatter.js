const { readFile, writeFile } = require("fs").promises;
// .require insted of the below 3 lines
// const util = require("util");
// const readFilePromise = util.promisify(readFile); //instead of writing the 10 line code below
// const writeFilePromise = util.promisify(writeFile);
// const getText = (path) => {
//     return new Promise((resolve, reject) => {/*A promise is basically an advancement of callbacks in Node.  
//         In other words, a promise is a JavaScript object which is used to handle all the asynchronous data operations.
//          While developing an application you may encounter that you are using a lot of nested callback functions.*/
//         readFile(path, "utf-8", (res, err) => {
//             if (err) {
//                 reject(err);
//             }
//             else {
//                 resolve(res);
//             }
//         })
//     })
// }
//getText("./content/textFile.txt").then(res => console.log(res)).catch((err) => console.log(err));

const start = async () => {
    try {
        const first = await readFile("./content/textFile.txt", "utf-8");
        await writeFile("./content/newFile.txt", `This is a ${first}`, { flag: 'a' });//to stop overwriting
        const second = await readFile("./content/newFile.txt", "utf-8")
        console.log(first);
        console.log(second);
    } catch (error) {
        console.log(error);
    }
}
start()//function call
