"use strict";
// let xulythongtin: Function;
var xulythongtin;
xulythongtin = function (info) {
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
var printinfo = function (a) {
    console.log(a);
};
// const main = (callback : Function)=> {
//     callback(1);
// }
var main = function (callback) {
    callback(1);
};
main(xulythongtin);
/*
giải thích : callback : (a: ten_gl) => void
- tham số callback truyền vào phải đúng theo định dạng như sau :
- số 1 tham số truyền vào là a ; a có kiểu ten_gl (alias)
*/ 
