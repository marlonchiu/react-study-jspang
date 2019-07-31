/** 
 * 扩展运算符  ...
 *  rest运算符
 *  */

//  传入参数不确定
// function jspang(...arg) {
//     console.log(arg[0])
//     console.log(arg[1])
//     console.log(arg[2])
// }
// jspang(1, 2)  //1,2,undefind

// 扩展运算符的用处(堆栈思想)
// let arr1=['www','jspang','com']; 
// let arr2=arr1;
// console.log(arr2); // ["www", "jspang", "com"]
// arr2.push('shengHongYu');
// console.log(arr1); // ["www", "jspang", "com", "shengHongYu"]
// console.log(arr2); // ["www", "jspang", "com", "shengHongYu"]
// // arr1的值也改变了，因为我们这是对内存堆栈的引用，而不是真正的赋值。


let arr1=['www','jspang','com'];
//let arr2=arr1;
let arr2=[...arr1];
console.log(arr2);// ["www", "jspang", "com"]
arr2.push('shengHongYu');
console.log(arr2);  // ["www", "jspang", "com", "shengHongYu"]
console.log(arr1);// ["www", "jspang", "com"]

// rest运算符  …（三个点）来表示
function jspang(first, ...arg) {
    console.log(arg.length)
}
jspang(0, 1, 2, 3, 4, 5, 6, 7);  // 7  arg里有7个数组元素

// 如何循环输出rest运算符  for…of循环
function jspang2(first, ...arg){
    for(let val of arg){
        console.log(val);
    }
}
jspang2(0, 1, 2, 3, 4, 5, 6, 7)  // 1 2 3 4 5 6 7

// for…of的循环可以避免我们开拓内存空间，增加代码运行效率，
// 所以建议大家在以后的工作中使用for…of循环

