"use strict";
// 面向对象编程 - 继承和重写
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 继承：允许我们创建一个类（子类），从已有的类（父类）上继承所有的属性和方法，
//          子类可以新建父类中没有的属性和方法。
var JsPang = /** @class */ (function () {
    function JsPang(name, age, skill) {
        this.name = name;
        this.age = age;
        this.skill = skill;
    }
    JsPang.prototype.interest = function () {
        console.log('技术胖的兴趣 -- 找小姐姐');
    };
    return JsPang;
}());
// 继承
var JsShuai = /** @class */ (function (_super) {
    __extends(JsShuai, _super);
    function JsShuai() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.yanzhi = '血气阳刚';
        return _this;
    }
    // 重写
    JsShuai.prototype.interest = function () {
        _super.prototype.interest.call(this);
        console.log('建立电商平台');
    };
    JsShuai.prototype.makeMoney = function () {
        console.log('小目标一天一个亿');
    };
    return JsShuai;
}(JsPang));
var xiaoshuai = new JsShuai('技术帅', 17, '绘画');
console.log(xiaoshuai.skill);
console.log(xiaoshuai.yanzhi);
xiaoshuai.interest();
xiaoshuai.makeMoney();
