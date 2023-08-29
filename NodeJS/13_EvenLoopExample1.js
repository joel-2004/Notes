const fs = require("fs");
console.log('Beging task');//first printed
fs.readFile("./content/newFile.txt", "utf-8", (err, res) => {
    /*js is a single threaded language meaning it executes code line by line,but it makes the tasks slower, so Nodes Event loop
    offload a few tasks to the kernel since most kernels are multithreaded
   synchronous or immediate codes are offloaded first i.e line 1 and line 16
    Asynchronous are offloaded only after immediate codes are offloaded i.e fs.readFile after line 1 and line 16
    */
    if (err) {
        console.log('error');
        return;
    }
    console.log(res);//third printed cuz of event loop
    console.log('Completed reading');//fourth printed
})
console.log("next task");//second printed