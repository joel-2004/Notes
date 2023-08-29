const http = require("http");

const server = http.createServer((req, res) => {//creating a server
    if (req.url === '/') {
        res.end("Welocme");
        return;//add a return statement here and everything should be fine
    }
    if (req.url === "/about") {
        res.end("About");
        return;//add a return statement here and everything should be fine
    }
    res.end(
        `<h1>Oops</h1>
        <a href="/">home</a>
        `
    )
})

server.listen(5000);//port no