// 面向对象编程-接口

// 认识接口    可选参数的接口
// interface Husband{
//     sex: string
//     interest: string
//     maiBaobao?:Boolean
// }

// let myHusband: Husband = {
//     sex: '男',
//     interest: '看书，做家务',
//     maiBaobao: true
// }
// console.log(myHusband)

// 规范函数类型接口
// 在面向对象的语言中，术语interface经常被用来定义一个不包含数据和逻辑代码但是用来签名定义了行为的抽象类型。

interface searchJob{
    (interviewee: string, jod: string): boolean
}

let mySearch: searchJob

mySearch = function (interviewee: string, jod: string): boolean{
    let flag = interviewee.search(jod)
    return (flag != -1)
}

console.log(mySearch('德、智、体、美、劳', '体、胖'))