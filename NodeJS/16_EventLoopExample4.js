const http = require("http");

const server = http.createServer((req, res) => {
    //this runs after sever.listen
    console.log("createServer");
    res.end("Created");
})

server.listen(5000, () => {
    console.log("listen");
    /*this process starts and 
     terminates only when the process is closed manually Ctrl+C,It keeps waiting for request */
})


//always better to use asycnhronous since it offloads the process , while synchronous just executes