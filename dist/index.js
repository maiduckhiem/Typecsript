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
var Component = /** @class */ (function () {
    function Component() {
    }
    Component.prototype.render = function () {
        //thêm dấu ! sau querySelector
        //=> thông báo với typescript : chắc chắn có một phần tử trong dom có id là root
        //& document.queryselector('root') không bao giờ null
        document.querySelector("#root").innerHTML = this.template();
        //hiển thị giao diện
        // await this.afterRender();
    };
    return Component;
}());
var UserIndex = /** @class */ (function (_super) {
    __extends(UserIndex, _super);
    function UserIndex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserIndex.prototype.template = function () {
        return "\n        <h1>Hello</h1>\n      ";
    };
    UserIndex.prototype.afterRender = function () {
        console.log("UserIndex@afterRender");
    };
    return UserIndex;
}(Component));
var gui = new UserIndex();
gui.render();
