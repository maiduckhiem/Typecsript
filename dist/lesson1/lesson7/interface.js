"use strict";
/*
? operrator : đánh dấu 1 thuộc tính là optional (không bắt buộc)
nếu class thực thi interface mà không định nghĩa lại thuộc tính
*/
var MyPerson = /** @class */ (function () {
    function MyPerson() {
    }
    MyPerson.prototype.greet = function (name) {
        console.log('hello' + name);
    };
    return MyPerson;
}());
var use;
use = new MyPerson();
use.greet('chao ban');
console.log(use);
