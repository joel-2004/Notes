console.log("first");//prints first
setTimeout(() => {
    console.log("second");//prints third,even though setTimeout is 0, because set timeout is asynchronous
}, 0);
console.log("third");//prints second