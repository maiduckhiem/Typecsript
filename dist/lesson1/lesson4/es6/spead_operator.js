"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var person = {
    name: "khiem body dep",
    age: 20,
};
var employee = __assign(__assign({}, person), { 
    // name: 'khiem dz',
    // age: 20,
    salary: '2000 vnd' });
console.log(employee);
var diem = [1, 2, 3, 4, 5, 6, 7];
var diemAll = __spreadArray(__spreadArray([], diem), [
    2, 4, 6
]);
console.log(diemAll);
/*spread operator có thể dùng trên object & arr.
sử dụng để lấy tất cả các thuộc tính {object} / phần tử {array}*/ 
