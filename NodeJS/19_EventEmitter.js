const eventEmitter = require("events");//it is a class
const event = new eventEmitter();//invoking class, now the const event is an object of class eventEmitter

event.on("res", () => {
    console.log("Hello");//name is not printed
})

event.on("res", (name) => {
    console.log("Hello 2 " + name);//name is printed in first functio 
})

event.emit("res", "joel");//multiple events with same name can be emiited with one emit

event.on("names", (name, id) => {
    console.log(`Hello ${name} id: ${id}`);
})

event.emit("names", "joel", 10);//passing in arguments for the above event