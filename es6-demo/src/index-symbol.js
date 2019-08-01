/** 
 * Symbol()
 *  */
var a = new String;
var b = new Number;
var c = new Boolean;
var d = new Array;
var e = new Object; 
var f= Symbol();
console.log(typeof (d)) // object

var g = Symbol('jspang');
console.log(g);  // 红字 Symbol(jspang)
console.log(g.toString());    // 黑字 Symbol(jspang)

// Symbol构建对象的Key，并调用和赋值
// var jspang = Symbol()
// var obj = {
//     [jspang]: '技术胖'
// }
// console.log(obj[jspang])  // 技术胖
// obj[jspang] = 'web'
// console.log(obj[jspang])  // web

// Symbol对象元素的保护作用
let obj = { name: 'jspang', skill: 'web' }
let age = Symbol()
obj[age] = 18
for (let item in obj){
    console.log(obj[item])
} 
console.log(obj)  // {name: "jspang", skill: "web", Symbol(): 18}