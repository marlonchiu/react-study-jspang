// let a = 1
// console.log(a)
/** 
 * 解构赋值
 *  */

 // 简单的数组解构
// let [a, b, c] = [1, 2, 3]
// console.log(a, b, c)

// 数组模式和赋值模式统一
// let [a1, [b1, c1], d1] = [1, [2, 3], 4];
// console.log(a1, b1, c1, d1)

// 解构的默认值
// let [foo = true] =[];
// console.log(foo); //控制台打印出true

// let [a, b="JSPang"]=['技术胖']
// console.log(a + b); //控制台显示“技术胖JSPang”
// let [a1,b1="JSPang"]=['技术胖',undefined];
// console.log(a1+b1); //控制台显示“技术胖JSPang”

// undefined相当于什么都没有，b是默认值
// null null相当于有值，但值为null

// 对象的解构赋值
// 对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；
// 而对象的属性没有次序，变量必须与属性同名，才能取到正确的值

// 圆括号的使用
let foo;
({ foo } = { foo: 'jspang' })
console.log(foo)

// 字符串结构赋值
const [a, b, c, d, e, f] = "JSPang";
console.log(a, b, c, d, e, f)
