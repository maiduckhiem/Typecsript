"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = /** @class */ (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        this.employmees = [];
    }
    Department.createEmplymees = function (name) {
        return { name: name };
    };
    Department.prototype.addEmployee = function (employee) {
        this.employmees.push(employee);
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log(this.employmees.length);
        console.log(this.employmees);
    };
    Department.fiscalYear = 2020;
    return Department;
}());
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins) {
        var _this = _super.call(this, id, 'IT') || this;
        _this.admins = admins;
        return _this;
    }
    ITDepartment.prototype.describe = function () {
        console.log('chao ban' + this.id);
    };
    return ITDepartment;
}(Department));
var employee1 = Department.createEmplymees('max');
console.log(employee1, Department.fiscalYear);
var IT = new ITDepartment('d1', ['max']);
IT.addEmployee('max');
IT.addEmployee('manu');
