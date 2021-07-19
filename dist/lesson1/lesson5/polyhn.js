"use strict";
var poHn = /** @class */ (function () {
    //shorthand initalizer
    function poHn(address) {
        this.address = address;
        this.address = address;
    }
    // hàm khởi tạo
    poHn.getcoso = function () {
        if (poHn.cosoHN == null) {
            poHn.cosoHN = new poHn("tvb");
        }
        return poHn.cosoHN;
    };
    return poHn;
}());
var p1 = poHn.getcoso();
// let p1: poHn = new poHn('tvb');
// let p2: poHn = new poHn('dia nguc');
// console.log(p1.address);
