export var a = 'jspang'

// 多变量输出
// var a ='jspang';
// var b ='技术胖';
// var c = 'web';
 
// export { a, b, c }

// 函数的模块化输出
export function add(a,b){
    return a + b;
}

// // as的用法 有些时候我们并不想暴露模块里边的变量名称，
// // 而给模块起一个更语义话的名称，这时候我们就可以使用as来操作
// export {
//     x as a,
//     y as b,
//     z as c
// }
