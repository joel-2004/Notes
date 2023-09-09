// const { writeFileSync } = require("fs");
// for (let i = 0; i <= 1000; i++) {
//     writeFileSync("./content/BigFile.txt", `Hello ${i}`, { flag: 'a' });
// } creating a big file to use Streams
//stream uses eventEmitter
//in this example we are using stream to read large datas from a file, we will not be able to do it with just readFile
const { createReadStream } = require("fs");

const stream = createReadStream("./content/BigFile.txt", { encoding: "utf-8" });

stream.on("data", (result) => {
    console.log(result);
})

stream.on("error", (err) => {
    console.log(err);
})
