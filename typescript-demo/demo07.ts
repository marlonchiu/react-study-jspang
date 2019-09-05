// let jspang = {
//     name: '技术胖',
//     website: 'jspang.com',
//     age: '35',
//     saySomething: function () {
//         console.log('为了世界和平')
//     }
// }

// console.log(jspang.name)
// jspang.saySomething()



/** 
 * 引用类型是一种复合的数据类型，引用类型中封装了很多对属性，
 * 每一对属性都有属性名和属性值。
 * 属性名是字符串，属性值是任意类型的数据。
 * 可以通过变量名和属性名获取属性的值或者调用属性的方法。
 * 在TypeScript中也给我们提供了一些引用类型，
 * 例如：Array（数组）、String（字符串）、Date（日期对象）、RegExp（正则表达式）等。
 * */


console.log('---------引用类型  数组 -----------')

// 声明数组
// let arr1: number[]   // 声明一个数值类型的数组
// let arr2:Array<string>   // 声明一个字符串类型的数组
// let arr3: Array<boolean>   // 声明一个布尔值类型的数组

// 给数组赋值
    // 字面量赋值法：直接使用“[ ]”对数组进行赋值。
    // 构造函数赋值法：

// 字面量赋值法
// let arr1: number[] = []
// let arr2: number[] = [1, 2, 3, 4]
// let arr3: Array<string> = ['花生', '毛豆', '啤酒']
// let arr4: Array<boolean> = [true, false, false]
// console.log(arr1)
// console.log(arr2)
// console.log(arr3)
// console.log(arr4)

// 构造函数的赋值方法
console.log('--------数组赋值之  构造函数的赋值方法-----')
let arr1: number[] = new Array()
let arr2: number[] = new Array(1, 2, 3, 4)
let arr3: Array<string> = new Array('花生', '毛豆', '啤酒')
let arr4: Array<boolean> = new Array(true, false, false)
console.log(arr1)
console.log(arr2)
console.log(arr3)
console.log(arr4)

// 元祖  一种特殊类型的数组
let arr5: [string, number, boolean]
arr5 = ['hello', 10, false]
// arr5 = [10, 'hello', false]
console.log(arr5)