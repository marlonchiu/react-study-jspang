/** 
 * 数字操作
 *  */

 // 二进制和八进制
 //     二进制  0b开头   010101
 //     八进制  0o开头   0-7

let binary = 0B010101;
console.log(binary);

let octal = 0o777;
console.log(octal);

// 数字判断和转换
/** 
 *  数字验证  Number.isFinite( xx )
 *  NaN验证   Number.isNaN( xx )
 *  整数验证   Number.isInteger(xx)
 * 
 *  整数转换    Number.parseInt(xxx)
 *  浮点型转换  Number.parseFloat(xxx)
 *  最大安全整数  Number.MAX_SAFE_INTEGER
 *  最小安全整数  Number.MIN_SAFE_INTEGER
 *  安全整数判断  Number.isSafeInteger()
 */

let a = '9.18';

console.log(Number.parseInt(a)); // number 9
console.log(Number.parseFloat(a)); // number 9.18

// 整数取值范围操作
// 整数的操作是有一个取值范围的，它的取值范围就是2的53次方

let b = Math.pow(2,53)-1;
console.log(b); //9007199254740991
// 最大安全整数
console.log(Number.MAX_SAFE_INTEGER)
// 安全整数判断isSafeInteger()
console.log(Number.isSafeInteger(b)); // true