/** 
 * 箭头函数
 * 
 *  可以设定默认值
 *  主动抛出错误
 * 
 *  箭头函数中不可加new，也就是说箭头函数不能当构造函数进行使用
 *    只有一句输出 可以省略 return 和 ()
 *              var add =(a,b=1) => a+b
 *    多行语句
 *              var add =(a,b=1) => {
                    console.log('jspang')
                    return a+b;
                }
 *  */

 // 可以设定默认值
function add(a, b = 1) {
    return a + b;
}
console.log(add(1))

// 主动抛出错误
// function add2(a,b=1){
//     if(a == 0){
//         throw new Error('This is error')
//     }
//     return a + b;
// }
// console.log(add2(0))

// 使用了默认值，再使用严谨模式的话错误 应取消默认值
// function add3(a,b=1){
//     'use strict'
//     if(a == 0){
//         throw new Error('This is error');
//     }
//      return a+b;
// }
// console.log(add3(1));

function add5(a,b){
    'use strict'
    if(a == 0){
        throw new Error('This is error');
    }
     return a+b;
}
console.log(add5.length) // 2
// 获得需要传递的参数个数 如果指定默认值 可能就要减一