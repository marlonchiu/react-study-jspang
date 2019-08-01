'use strict';

/** 
 * ES6中的函数和数组补漏
 * 
 *  
 *  */
// let json = {
//     a:'jspang',
//     b:'技术胖'
// }
// function fun({ a, b = 'jspang' }) {
//     console.log(a, b);
// }
// fun(json)  // jspang 技术胖

// in的用法
// in是用来判断对象或者数组中是否存在某个值的
// let obj = {
//     a: 'jspang',
//     b: '技术胖' 
// }
// console.log('a' in obj);  //true

// let arr1=['jspang','技术胖'];
// console.log(0 in arr1);  // true   0指的是数组下标位置是否为空

/** 
 * 数组的方法
 *   forEach 循环遍历
 *   filter 循环遍历
 *   some  循环遍历
 *   map  替换
 * 
 *  */
var arr = ['jspang', '技术胖', '前端教程'];

// arr.filter(x => console.log(x))
// arr.some(x => console.log(x))
// console.log(arr.map(x => 'web'))    // ["web", "web", "web"]

// join()方法就是在数组元素中间
// toString  ，隔开
console.log(arr.join('|'));
console.log(arr.toString());
