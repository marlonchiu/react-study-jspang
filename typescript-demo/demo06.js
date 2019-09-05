"use strict";
// 函数中变量的作用域
console.log('-----------函数作用域演示-------------');
// var yangzi: string = '刘德华'
// function zhengXing(): void {
//     // console.log(yangzi)
//     console.log('技术胖整形成了'+ yangzi +'的样子')
// }
// zhengXing()
// console.log(yangzi)
console.log('-----------局部变量和全局变量重名-------------');
var yangzi = '刘德华';
function zhengXing() {
    // console.log('技术胖整形成了'+ yangzi +'的样子')  // undefined  变量提升
    // var yangzi: string = '王祖蓝'
    // console.log('技术胖整形成了'+ yangzi +'的样子')
    // 等价于
    var yangzi;
    console.log('技术胖整形成了' + yangzi + '的样子'); // undefined  变量提升
    yangzi = '王祖蓝';
    console.log('技术胖整形成了' + yangzi + '的样子');
}
// zhengXing()
// console.log(yangzi)
// 当内部声明了和全局的变量同名时，就会出现变量提升的效果，声明语句会提升到函数的第一句。
// 这就是著名的变量提升效果。
console.log('-----------let关键字变量的作用域-------------');
function zhengXing2() {
    var yangzia = '刘德华';
    {
        var yangzib = '王祖蓝';
        console.log('技术胖整形成了' + yangzib + '的样子');
    }
    console.log('技术胖整形成了' + yangzia + '的样子');
    console.log('技术胖整形成了' + yangzib + '的样子'); // 王祖蓝   这里是个坑 
    // ts编译成js，let关键字被编译为var 了
    // 如果把编译好的代码  再次改为let 执行，就会发现报错了  直接报错 ReferenceError: yangzib is not defined
}
zhengXing2();
/**
 * ts编译成js，自动给我们加了ES5的处理，
 * ES5里是没有let关键字的，现在我们再改一下编译好的程序，你会发现yangzib这个关键字就找不到
 */
