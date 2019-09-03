"use strict";
// 面向对象编程-命名空间
// 命名空间，又称内部模块，被用于组织有些具有内在联系的特性和对象
var shuaiGe;
(function (shuaiGe) {
    var DeHua = /** @class */ (function () {
        function DeHua() {
            this.name = '刘德华';
        }
        DeHua.prototype.talk = function () {
            console.log('我是帅哥刘德华');
        };
        return DeHua;
    }());
    shuaiGe.DeHua = DeHua;
})(shuaiGe || (shuaiGe = {}));
var baJie;
(function (baJie) {
    var DeHua = /** @class */ (function () {
        function DeHua() {
            this.name = '马德华';
        }
        DeHua.prototype.talk = function () {
            console.log('我是二师兄马德华');
        };
        return DeHua;
    }());
    baJie.DeHua = DeHua;
})(baJie || (baJie = {}));
var dehua1 = new shuaiGe.DeHua();
var dehua2 = new baJie.DeHua();
console.log(dehua1.name);
dehua1.talk();
console.log(dehua2.name);
dehua2.talk();
