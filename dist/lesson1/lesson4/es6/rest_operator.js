"use strict";
//rest operator
//dùng cho tham số của một hàm vị trí và công dụng khác nhau
var tong = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var sum = 0;
    var count = 0;
    numbers.forEach(function (Element) {
        sum += Element;
        count++;
    });
    return sum / count;
};
console.log(tong(1, 2, 4, 5, 6, 7, 8, 9));
