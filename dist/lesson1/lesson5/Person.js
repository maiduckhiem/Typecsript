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
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    return Person;
}());
var Emloyee = /** @class */ (function (_super) {
    __extends(Emloyee, _super);
    function Emloyee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Emloyee.prototype.Emloyee = function (id, name, salary) {
        _this = _super.call(this, id, n) || this;
        this.name = name;
        this.salary = salary;
    };
    Emloyee.prototype.getSalary = function () {
        return this.salary;
    };
    Emloyee.prototype.setSalary = function (salary) {
        this.salary = salary;
    };
    Emloyee.prototype.toString = function () {
        return this.getId() + " - " + this.name + " - " + this.salary;
    };
    return Emloyee;
}(Person));
var e = new Emloyee(1, "Chao ban", 0);
// let p: Person = new Person("choaDDD");
// console.log(p.name);
// p.setName("chaonn");
// console.log(p.getName());
// public được phép truy xuất tất cả mọi nơi
// protected chỉ được truy xuất trong class đó hoặc trong các lớp con
// private chỉ được truy xuất trong class đó 
