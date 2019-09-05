var age = 18;
var stature = 187.5;
console.log(age);
console.log(stature);
console.log('----------------');
var jspang = '技术胖 jspang.com';
console.log(jspang);
console.log('----------------');
var flag = true;
console.log(flag, !flag);
console.log('----------------');
// enum 枚举类型
var SEASON;
(function (SEASON) {
    SEASON["spring"] = "\u6625\u5B63";
    SEASON["summer"] = "\u590F\u5B63";
    SEASON["autumn"] = "\u79CB\u5B63";
    SEASON["winter"] = "\u51AC\u5B63";
})(SEASON || (SEASON = {}));
console.log(SEASON);
console.log(SEASON.summer);
console.log('----------------');
// any 任意类型
var t = 110;
t = "jspang";
t = true;
console.log(t);
console.log('----------------');
// null 类型
console.log('----------------');
// array 类型
var list1 = [11, 22, 33];
console.log(list1);
var list = [1, 2, 3];
console.log(list);
// 元组类型（tuple）  属于数组的一种
var list2 = [123, 'this is ts', true];
console.log(list2);
// 枚举类型
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 200] = "success";
    Flag[Flag["error"] = 404] = "error";
    Flag[Flag["server"] = 500] = "server";
})(Flag || (Flag = {}));
var sFlag = Flag.success;
console.log(sFlag);
var Err;
(function (Err) {
    Err[Err["undefined"] = -1] = "undefined";
    Err[Err["null"] = -2] = "null";
    Err[Err["success"] = 1] = "success";
})(Err || (Err = {}));
// let err: Err = Err['null']
var err = Err["null"];
console.log(err);
