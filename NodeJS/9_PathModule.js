const path = require("path");
console.log(path.sep);//prints the separate path

const pathOfSub = path.join("/content", "subfolder", "text.txt");
console.log(pathOfSub);
console.log(path.basename(pathOfSub));//prints text.txt 
const absolute = path.resolve(__dirname);//__dirname name is a global variable (see 2_global.js)
console.log(absolute);//prints the absoulute path