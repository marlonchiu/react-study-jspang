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
class Person{
     // 类的构造方法
    constructor(name, age) {
         this.name = name
         this.age = age
    }
     // 类的一般方法
    showName() {
        console.log(this.name, this.age)
    }
}
 
let p1 = new Person('TIM', 38)
console.log(p1.name)
p1.showName()

// 定义一个Student 继承Person
class Student extends Person{  // 定义的Student类继承自Person类
    constructor(name, age, salary) {
        super(name, age)  // 通过super调用父类的构造方法
        this.salary = salary
    }
    showName (name, age, salary){
        console.log(this.name, this.age, this.salary);
    }
}
let s1 = new Student("MARLON", 26, 17000);
console.log(s1.name);
s1.showName()