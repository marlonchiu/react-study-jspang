/** 
 * 数组知识
 * 
 *  JSON数组格式转换  Array.from(xxx)
 *  文本或者变量转换成数组  Array.of()
 *  find()实例方法
 *      函数需要传入三个参数：
        value：表示当前查找的值。
        index：表示当前查找的数组索引。
        arr：表示当前数组。
      返回值
        找到符合条件的数组元素就进行return，并停止查找，
        未找到undefind
 *  */
let  json = {
    '0': 'jspang',
    '1': '技术胖',
    '2': '大胖逼逼叨',
    length:3
}
 
let arr = Array.from(json);
console.log(arr)  // ["jspang", "技术胖", "大胖逼逼叨"]
 
let arr2 = Array.of(3, 4, 5, 6);
console.log(arr2) // [3, 4, 5, 6]

let arr3 = Array.of('技术胖', 'jspang', '大胖逼逼叨');
console.log(arr3)  // ["jspang", "技术胖", "大胖逼逼叨"]

let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const res = arr4.find(function (value, index, arr4) {
    return value > 100
})
console.log(res) // undefined