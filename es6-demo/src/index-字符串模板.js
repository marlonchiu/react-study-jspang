/** 
 * 字符串模板
 *  */

 // 支持html 标签
// let jspang = '技术胖';
// let blog = `<b>非常高兴你能看到这篇文章，</b><br/>我是你的老朋友${jspang}。这节课我们学习字符串模版。`;
// document.write(blog)

// 支持运算
// let a = 1;
// let b = 2;
// let result = `${a + b}`;
// document.write(result)


// 字符串查找
let jspang = '技术胖';

let blog = '非常高兴你能看到这篇文章，我是你的老朋友技术胖。这节课我们学习字符串模版。';
document.write(blog.indexOf(jspang));
document.write(blog.includes(jspang))
// 判断开头结尾
console.log(blog.startsWith(jspang))
console.log(blog.endsWith(jspang))

// 字符串复制
document.write('jspang|'.repeat(3));
