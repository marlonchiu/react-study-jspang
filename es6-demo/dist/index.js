"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** 
 *   class类
 *      通过class定义类/实现类的继承
 *      在类中通过constructor定义构造方法
 *      通过new来创建类的实例
 *      通过extends来实现类的继承
 *      通过super调用父类的构造方法
 *      重写从父类中继承的一般方法
 *  */

// 用class定义一个Person类
var Person = function () {
  // 类的构造方法
  function Person(name, age) {
    _classCallCheck(this, Person);

    this.name = name;
    this.age = age;
  }
  // 类的一般方法


  _createClass(Person, [{
    key: "showName",
    value: function showName() {
      console.log(this.name, this.age);
    }
  }]);

  return Person;
}();

var p1 = new Person('TIM', 38);
console.log(p1.name);
p1.showName();

// 定义一个Student 继承Person

var Student = function (_Person) {
  _inherits(Student, _Person);

  function Student(name, age, salary) {
    _classCallCheck(this, Student);

    var _this = _possibleConstructorReturn(this, (Student.__proto__ || Object.getPrototypeOf(Student)).call(this, name, age));

    _this.salary = salary;
    return _this;
  }

  _createClass(Student, [{
    key: "showName",
    value: function showName(name, age, salary) {
      console.log(this.name, this.age, this.salary);
    }
  }]);

  return Student;
}(Person);

var s1 = new Student("MARLON", 26, 17000);
console.log(s1.name);
s1.showName();
