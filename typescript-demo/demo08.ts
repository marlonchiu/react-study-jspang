// 引用类型 字符串

// 基本类型字符串：由单引号或者双引号括起来的一串字符串
let jspangA: string = '技术胖'
// 引用类型字符串：用new 实例化的 String类型
let jspangB: String = new String('jspang.com')

console.log(jspangA, jspangA.length)
console.log(jspangB, jspangB.length)  // [String: 'jspang.com']

// 字符串的常用方法
let something:string = "清早起来打开窗，心情美美的，我要出去找小姐姐，心情美美的。"
let xiaoJieJie:string = "小姐姐"
console.log(something.indexOf(xiaoJieJie))   //19
console.log(something.indexOf('技术胖'))   //-1
console.log(something.lastIndexOf(xiaoJieJie))   //19

// 截取字符串 str.substring(startIndex,[endIndex])
console.log(something.substring(8))
console.log(something.substring(8,19))

// 替换字符串 str.replace(subStr,newstr);
console.log(something.replace(xiaoJieJie, '小哥哥'))
console.log(something)