const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/html" })
    //200 is the status code lik 404, these are like the meta datas
    /*Status code
    100-199 informational response
    200-200 sucess
    300-399 redirect
    400-499 client error
    500-599 server error
    */
    //meta datas are more information about the file
    res.write("<h1>Home Page</h1>");//html code
    res.end();//always call res.end() to finish the communication

})

server.listen(5000);