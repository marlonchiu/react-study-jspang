"use strict";
// 类是对象具体事务的一个抽象，对象是类的具体表现
var XiaoJieJie = /** @class */ (function () {
    function XiaoJieJie(name, age) {
        this.name = name;
        this.age = age;
    }
    XiaoJieJie.prototype.sayHello = function () {
        console.log(this.name + '对你说，小哥哥好！');
    };
    return XiaoJieJie;
}());
var jiejie = new XiaoJieJie('刘亦菲', 18);
console.log(jiejie);
jiejie.sayHello();
