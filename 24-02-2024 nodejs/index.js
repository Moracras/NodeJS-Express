'use strict'
// NODE MODULES ///


console.log("Hello FS15");
// require('./modules/module.js')
// js uzantıya gerek yok
require('./modules/module')
// default index.js arar
require('./modules/')


//? single function call
const testSingleFunction =require('./modules/module')
testSingleFunction()