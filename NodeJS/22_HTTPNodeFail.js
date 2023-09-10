const http = require("http");
const { readFileSync } = require("fs");
//NOTE : THE REASON WE GO FOR EXPRESS IS GIVEN AFTER THE END OF THE CODE, SCROOOLLLLLLL DOWNNNNN
//read files
const homePage = readFileSync("./content/index.html");//reading a html file and using it below
const aboutPage = readFileSync("./content/about.html");
const server = http.createServer((req, res) => {
    // res.writeHead(200, { "content-type": "text/html" })
    //200 is the status code lik 404, these are like the meta datas
    /*Status code
    100-199 informational response
    200-200 sucess
    300-399 redirect
    400-499 client error
    500-599 server error
    */
    //meta datas are more information about the file
    const url = req.url;
    if (url == "/") {
        res.writeHead(200, { "content-type": "text/html" })
        // res.write("<h1> home </h1>");//html code
        //update to
        res.write(homePage);
        res.end();//always call res.end() to finish the communication
    }
    else if (url == "/about") {
        res.writeHead(200, { "content-type": "text/html" })
        //  res.write("<h1>About Page</h1>");//html code
        res.write(aboutPage);
        res.end();//always call res.end() to finish the communication
    }
    else {
        res.writeHead(404, { "content-type": "text/html" })//404 for error page 
        res.write("<h1>Error Page</h1>");//html code
        res.end();//always call res.end() to finish the communication
    }
})
server.listen(5000);

/*
when we are deploying a whole webpage that include html,css,js. Whenever we are requesting for something like
a image path, script path, css path we are forced to specify each requests manually, 
which would result in something like this, and this is the reason we go for Express.js
CODE FROM GITHUB FROM THE YOUTUBE AUTHOR:

______________________________________________________________________________________________________________________
const http = require('http')
const { readFileSync } = require('fs')

// get all files
const homePage = readFileSync('./navbar-app/index.html')
const homeStyles = readFileSync('./navbar-app/styles.css')
const homeImage = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')

const server = http.createServer((req, res) => {
  // console.log(req.method)
  const url = req.url
  console.log(url)
  // home page
  if (url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write(homePage)
    res.end()
  }
  // about page
  else if (url === '/about') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write('<h1>about page</h1>')
    res.end()
  }
  // styles
  else if (url === '/styles.css') {
    res.writeHead(200, { 'content-type': 'text/css' })
    res.write(homeStyles)
    res.end()
  }
  // image/logo
  else if (url === '/logo.svg') {
    res.writeHead(200, { 'content-type': 'image/svg+xml' })
    res.write(homeImage)
    res.end()
  }
  // logic
  else if (url === '/browser-app.js') {
    res.writeHead(200, { 'content-type': 'text/javascript' })
    res.write(homeLogic)
    res.end()
  }
  // 404
  else {
    res.writeHead(404, { 'content-type': 'text/html' })
    res.write('<h1>page not found</h1>')
    res.end()
  }
})

server.listen(5000)
*/