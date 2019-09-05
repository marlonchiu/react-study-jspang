"use strict";
// 面向对象编程-修饰符
/**
 * 访问修饰符
* 类中属性的访问可以用访问修饰符来进行限制。
*       访问修饰符分为：public、protected、private。
*           public:公有修饰符，可以在类内或者类外使用public修饰的属性或者行为，默认修饰符。
*           protected:受保护的修饰符，可以本类和子类中使用protected修饰的属性和行为。
*           private : 私有修饰符，只可以在类内使用private修饰的属性和行为。
 */
var XiaoJieJie2 = /** @class */ (function () {
    function XiaoJieJie2(sex, name, age) {
        this.sex = sex;
        this.name = name;
        this.age = age;
    }
    XiaoJieJie2.prototype.sayHello = function () {
        console.log(this.name + '对你说，小哥哥好！');
    };
    XiaoJieJie2.prototype.sayLove = function () {
        console.log('我爱你');
    };
    return XiaoJieJie2;
}());
var jiejie2 = new XiaoJieJie2('女', '刘亦菲', 26);
console.log(jiejie2.sex);
console.log(jiejie2.name);
console.log(jiejie2.age);
jiejie2.sayHello();
jiejie2.sayLove();
//  编辑时提示 报错  但转为ES5是可以正常输出结果的
// 只读属性修饰符
var SuperMan = /** @class */ (function () {
    function SuperMan() {
        this.name = '钢铁侠';
    }
    return SuperMan;
}());
var man = new SuperMan();
console.log(man.name);
man.name = '黑寡妇';
console.log(man.name);
