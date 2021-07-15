"use strict";
var sayHello = function () {
    console.log('hello ban');
};
var sum; //kiểu dữ liệu của function
sum = function (a, b) {
    return a + b;
};
var process = function (cd) {
    var x = 1;
    var y = 3;
    var result = cd(x, y);
    console.log(result);
};
process;
process(sum);
