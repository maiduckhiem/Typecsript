"use strict";
// param ? đây là cú pháp optional parameter chuyền hoặc không chuyền 
var incremen;
//default & optional parameter
incremen = function (numb, base) {
    if (base === void 0) { base = 1; }
    return numb + base;
};
var num = 5;
var base = 1;
console.log(incremen(num));
