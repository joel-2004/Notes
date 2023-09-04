const http = require("http");

const server = http.createServer();
server.on("request", (req, res) => {//this has to be request since it is from an eventEmitter
    res.end("hello");
})
//using eventEmiiter in HTTP module by using .on

server.listen(5000, () => {
    console.log("listen");
})


