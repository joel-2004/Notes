//File System module Sync
// const {readFileSync,writeaFileSync}=require("fs"); destructuring the method that we need from "fs"
const fs = require("fs");
console.log(fs.readFileSync("./content/textFile.txt"));//op:<Buffer 48 65 6c 6c 6f>
const data = fs.readFileSync("./content/textFile.txt", "utf-8");//op:Hello second argument is the type of op.more options like asscii

fs.writeFileSync("./content/textFile.txt", "wrote something");//writing data in file arguments(path,String)

fs.writeFileSync("./content/newFile.txt", "newFile with " + data);//if file is not there node will create one,if it is present it will write the data

console.log(fs.readFileSync("./content/textFile.txt", "utf-8"));//after writeFileSync
console.log(fs.readFileSync("./content/newFile.txt", "utf-8"));//prints from the new created File


//to not overwrite and append the data from the previous textfile add a third argument

fs.writeFileSync("./content/textFile.txt", "wrote something", { flag: "a" });

/*Synchronous JavaScript: As the name suggests synchronous means to be in a sequence, i.e. 
every statement of the code gets executed one by one. So, basically a statement has to wait for 
the earlier statement to get executed.
Let us understand this with the help of an example.*/