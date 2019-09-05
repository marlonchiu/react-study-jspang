"use strict";
// 引用类型-日期对象
// 不传递任何参数
// let d:Date = new Date()
// console.log(d)
// 传递一个整数
// let d:Date = new Date(1000)
// let d2:Date = new Date(2000)
// console.log(d)  // 1970-01-01T00:00:01.000Z
// console.log(d2)
// 传递一个字符串
// 如果传递一个表示日期的字符串，就会生成相对应的日期对象。
// 字符串的格式常用: yyyy / MM / dd hh: mm: ss，
//                  yyyy - MM - dd hh: mm: ss，
//                  yyyy - MM - ddThh: mm: ss
var d1 = new Date('2018/05/12 14:28:21');
var d2 = new Date('2018-05-12 14:28:21');
var d3 = new Date('2018-05-12T14:28:21');
console.log(d1);
console.log(d2);
console.log(d3);
// 传递表示年月日时分秒的变量
/**
 *  year 表示年份，4位数字。
    month表示月份，数值是0(1月)~11(12月)之间的整数。
    day 表示日期。数值是1~31之间的整数。
    hours 表示小时，数值是0-23之间的整数。
    minutes 表示分钟数，数值是0~59之间的整数。
    seconds 表示秒数，数值是0~59之间的整数。
    ms 表示毫秒数，数值是0~999之间的整数
 */
// let dy: Date = new Date(2018)
// let dm: Date = new Date(5)
// let dd: Date = new Date(12)
// let dh: Date = new Date(14)
// let dms: Date = new Date(28)
// let dss: Date = new Date(21)
// let dmms: Date = new Date(1000)
// console.log(dy, dm, dd, dh, dms, dss, dmms)
