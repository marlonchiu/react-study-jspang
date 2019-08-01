'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

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
 * Object.entries()  ES6 可以把二维对象转换成数组列表 属性作为某个想的第一个值，key作为第二个值
 *  */
// let arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// arr1.fill('jspang', 2, 5); // [0, 1, "jspang", "jspang", "jspang", 5, 6, 7, 8, 9]
// console.log(arr1)

var arr2 = ['jspang', '技术胖', '大胖逼逼叨'];
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = arr2[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var item = _step.value;

        console.log(item); // 3 次 'jspang', '技术胖', '大胖逼逼叨'
    }

    // 返回索引
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

var arr3 = ['jspang', '技术胖', '大胖逼逼叨'];
var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
    for (var _iterator2 = arr3.keys()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var index = _step2.value;

        console.log(index); // 三次 0 1 2 
    }

    // 同时输出数组的内容和索引
} catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
        }
    } finally {
        if (_didIteratorError2) {
            throw _iteratorError2;
        }
    }
}

var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
    for (var _iterator3 = arr3.entries()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var _step3$value = _slicedToArray(_step3.value, 2),
            _index = _step3$value[0],
            val = _step3$value[1];

        console.log(_index + ':' + val);
    }

    // entries()实例方法：
    // entries()实例方式生成的是Iterator形式的数组，
    // 那这种形式的好处就是可以让我们在需要时用next()手动跳转到下一个值
} catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
        }
    } finally {
        if (_didIteratorError3) {
            throw _iteratorError3;
        }
    }
}

console.log(arr3.entries()); // Array Iterator {}
var list = arr3.entries();
console.log(list.next().value);[0, "jspang"];
console.log(list.next().value);[1, "技术胖"];
console.log(list.next().value);[2, "大胖逼逼叨"];

var obj = {
    name: 'marlon',
    age: 26
};
var result = Object.entries(obj);
console.log(result);
