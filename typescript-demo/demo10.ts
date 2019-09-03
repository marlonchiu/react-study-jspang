// 引用类型-正则表达式
// 构造函数法
// 构造函数中可以传一个参数，也可以传递两个参数。
// 一个是字符串描述，另一个是修饰符，比如g是全局修饰符，i是忽略大小写，m是多行模式。

let reg1: RegExp = new RegExp('jspang')
console.log(reg1)           //      /jspang/

let reg2: RegExp = new RegExp('jspang', 'gi')
console.log(reg2)           //      /jspang/gi

// 字面量法
let reg3: RegExp = /jspang/
console.log(reg3)           //      /jspang/
let reg4: RegExp = /jspang/gi
console.log(reg4)            //      /jspang/gi


// RegExp中的常用方法
// RegExp对象包含两个方法：test( )和exec( ),功能基本相似，用于测试字符串匹配。

// test(string) ：在字符串中查找是否存在指定的正则表达式并返回布尔值，
//                如果存在则返回 true，不存在则返回 false。
// exec(string) : 用于在字符串中查找指定正则表达式，
//                如果 exec() 方法执行成功，则返回包含该查找字符串的相关信息数组。如果

let website: string = 'jspang.com'
let resultA: boolean = reg1.test(website)
let resultB: any = reg1.exec(website)
console.log(resultA)
console.log(resultB)   // [ 'jspang', index: 0, input: 'jspang.com', groups: undefined ]
let resultC: any = reg2.exec('HAHHA')
console.log(resultC)  // null