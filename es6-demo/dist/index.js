'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** 
 * 对象
 *   Object.is( ) 对象比较 
 *   Object.assign( )合并对象
 *  
 *  */

// KEY值构建
var key = 'skill';
var obj = _defineProperty({}, key, 'web');
console.log(obj.skill); // web

var obj1 = { name: 'jspang' };
var obj2 = { name: 'jspang' };
console.log(obj1.name === obj2.name); //true
console.log(Object.is(obj1.name, obj2.name)); //true

// ===为同值相等，is()为严格相等
console.log(+0 === -0); //true

console.log(NaN === NaN); //false

console.log(Object.is(+0, -0)); //false

console.log(Object.is(NaN, NaN)); //true


var x = { a: 'jspang' };
var y = { b: '技术胖', m: '我是谁' };
var z = { c: 'web' };
var d = Object.assign(x, y, z);
console.log(d);
