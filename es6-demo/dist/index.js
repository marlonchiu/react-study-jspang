'use strict';

/** 
 *   用Proxy进行预处理
 *    Proxy的存在就可以让我们给函数加上这样的钩子函数
 *      get属性
 *              get属性是在你得到某对象属性值时预处理的方法，他接受三个参数
 *          target：得到的目标值
 *          key：目标的key值，相当于对象的属性
 *          receiver：这个不太常用，用法还在研究中
 *     set属性
 *              set属性是值你要改变Proxy属性值时，进行的预先处理。它接收四个参数。

 *          target:目标值。
 *          key：目标的Key值。
 *          value：要改变的值。
 *          receiver：改变前的原始值
 *  
 *  */
// var obj = {
//     add: function (val) {
//         return val + 10;  
//     },
//     name: 'I am Jspang'
// };
// console.log(obj.add(100))
// console.log(obj.name)

// 声明Proxy
var pro = new Proxy({
    add: function add(val) {
        return val + 10;
    },
    name: 'I am Jspang'
}, {
    get: function get(target, key, receiver) {
        console.log('come in Get');
        return target[key];
    },
    set: function set(target, key, value, receiver) {
        console.log('setting ' + key + ' = ' + value);
        return target[key] = value;
    }
});

console.log(pro.name); // 先输出了come in Get  然后才是name
pro.name = '技术胖'; // setting name = 技术胖
console.log(pro.name);

// apply的作用是调用内部的方法，它使用在方法体是一个匿名函数时
var target = function target() {
    return 'I am JSPang';
};
var handler = {
    apply: function apply(target, ctx, args) {
        console.log('do apply');
        return Reflect.apply.apply(Reflect, arguments);
    }
};

var pro = new Proxy(target, handler);

console.log(pro()); // I am JSPang


// http://es6.ruanyifeng.com/#docs/proxy
var twice = {
    apply: function apply(target, ctx, args) {
        return Reflect.apply.apply(Reflect, arguments) * 2;
    }
};
function sum(left, right) {
    return left + right;
};
var proxy = new Proxy(sum, twice);
proxy(1, 2); // 6
proxy.call(null, 5, 6); // 22
proxy.apply(null, [7, 8]); // 30

// 每当执行proxy函数（直接调用或call和apply调用），就会被apply方法拦截。
