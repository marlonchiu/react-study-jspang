// 函数声明的方式
console.log('--------函数声明法-----------')
function sum(n1: number, n2: number):number {
    return n1 + n2
}
var result1:number = sum(18, 35)
console.log('函数声明法' + result1)


console.log('--------函数表达式法-----------')
var sum2 = function (n1: number, n2: number):number {
    return n1 + n2
}
var result2:number = sum2(18, 35)
console.log('函数表达式法' + result2)


console.log('--------箭头函数-----------')
var sum3 = (n1: number, n2: number): number => {
    return n1 + n2
}
var result3:number = sum3(18, 35)
console.log('箭头函数' + result3)