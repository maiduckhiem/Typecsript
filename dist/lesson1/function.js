"use strict";
var gioitinh = function (info) {
    if (typeof info == 'string') {
        console.log('ho ten' + info);
    }
    else if (info == 1) {
        console.log('gioi tinh : nam');
    }
    else {
        console.log('gioi tinh : nu');
    }
};
gioitinh('0');
