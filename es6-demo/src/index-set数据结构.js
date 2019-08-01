/** 
 * Set() 数据结构
 *   Set和Array 的区别是Set不允许内部有重复的值，如果有只显示一个，相当于去重。
 *   虽然Set很像数组，但是他不是数组
 *  
 *  */

 // set s声明
let setArr = new Set(['jspang', '技术胖', 'web', 'jspang'])
console.log(setArr)  // Set(3) {"jspang", "技术胖", "web"}

// Set值的增删查  add delete has
setArr.add('前端职场');
console.log(setArr) // Set(4) {"jspang", "技术胖", "web", "前端职场"}
setArr.delete('前端职场');
console.log(setArr); // Set(3) {"jspang", "技术胖", "web"}
console.log(setArr.has('jspang')); //true
// 清除 clear()
// setArr.clear();
// console.log(setArray) // error setArray is not defined

// for... of... 循环
for (let item of setArr) {
    console.log(item)
}

// size Set值的数量
console.log(setArr.size)

// forEach循环
setArr.forEach(value => console.log(value))

// weakSet 弱声明
let weakObj=new WeakSet();
let obj={a:'jspang',b:'技术胖'}
weakObj.add(obj);
 
console.log(weakObj)  // WeakSet {{…}}