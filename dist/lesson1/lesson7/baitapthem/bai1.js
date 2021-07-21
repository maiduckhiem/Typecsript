"use strict";
var VATcalculator = /** @class */ (function () {
    function VATcalculator() {
    }
    VATcalculator.prototype.calculate = function (amount) {
        return amount * 1.25;
    };
    return VATcalculator;
}());
var vat = new VATcalculator();
console.log(vat.calculate(100));
