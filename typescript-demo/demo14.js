"use strict";
// 面向对象编程-接口
var mySearch;
mySearch = function (interviewee, jod) {
    var flag = interviewee.search(jod);
    return (flag != -1);
};
console.log(mySearch('德、智、体、美、劳', '体、胖'));
