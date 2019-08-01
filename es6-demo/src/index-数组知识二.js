/** 
 * 数组知识
 * 
 *  fill()  数组填充
 *      把数组进行填充，它接收三个参数，
 *          第一个参数是填充的变量，
 *          第二个是开始填充的位置，
 *          第三个是填充到的位置。(填充的总个数 两个相减)
 *  数组遍历
 *      for…of循环 
 *      entries()
 *  
 *      Object.entries()  ES6 可以把二维对象转换成数组列表 属性作为某个想的第一个值，key作为第二个值
 *      Object.entries(obj).every(item => true) 对数组的每一个进行判断
 *  */
// let arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// arr1.fill('jspang', 2, 5); // [0, 1, "jspang", "jspang", "jspang", 5, 6, 7, 8, 9]
// console.log(arr1)

let arr2 = ['jspang', '技术胖', '大胖逼逼叨']
for (let item of arr2) {
    console.log(item); // 3 次 'jspang', '技术胖', '大胖逼逼叨'
}

// 返回索引
let arr3 = ['jspang', '技术胖', '大胖逼逼叨']
for (let index of arr3.keys()) {
    console.log(index);  // 三次 0 1 2 
}

// 同时输出数组的内容和索引
for (let [index, val] of arr3.entries()) {
    console.log(index+':'+val)
}

// entries()实例方法：
// entries()实例方式生成的是Iterator形式的数组，
// 那这种形式的好处就是可以让我们在需要时用next()手动跳转到下一个值
console.log(arr3.entries())  // Array Iterator {}
let list = arr3.entries();
console.log(list.next().value); [0, "jspang"]
console.log(list.next().value); [1, "技术胖"]
console.log(list.next().value);[2, "大胖逼逼叨"]


/** 
 *  补充
 *     Object.entries()  ES6 可以把二维对象转换成数组列表 属性作为某个想的第一个值，key作为第二个值
 *      Object.entries(obj).every(item => true) 对数组的每一个进行判断
 */
let obj = {
    name: 'marlon',
    age: 26
}
var result = Object.entries(obj)
console.log(result)