//local 
const notSharing = "not sharing"
//global (sharing)
const joel = "joel";
const neymar = "neymar";

//we can select the data to be shared to other modules
// module.exports({joel:joel,neymar:neymar})

module.exports = { joel, neymar };
//using this because keyname is same as value
