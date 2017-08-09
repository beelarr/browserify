"use strict";

console.log("Grunting it up");

let mainHappy = require('./happy.js');

console.log('happy', mainHappy);

let getTest = require('./test.js');

mainHappy.setHappy('Super')

console.log(getTest.mainTest)

console.log(mainHappy.getHappy())