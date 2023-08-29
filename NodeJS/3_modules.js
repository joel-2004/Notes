//every file is a module
const name = require("./4_NameForModules");
console.log(name);//prints value with key;
const fun = require("./5_FunctionForModlues");
console.log(fun);
const item = require("./6_alternativeExport");
console.log(item.item);
console.log(item.singlePerson.name, item.singlePerson.age);
fun("joe");
fun(name.joel);
fun(name.neymar);

//mindGrenade
require("./7_mindGrenade");//note we are not storing it

// sayName("jo");
// sayName(joel);
// sayName(neymar);



