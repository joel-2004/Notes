//a few in-built modules are OS,path,HTTP

const os = require("os");//since it os a built-in module we just use os

//info about current user
console.log(os.userInfo());

//info about system uptime
console.log(os.uptime());

const osInfo = {
    name: os.type(),
    release: os.release(),
    memory: os.totalmem(),
    freeMem: os.freemem()
}
console.log(osInfo);
//so many more methods in OS