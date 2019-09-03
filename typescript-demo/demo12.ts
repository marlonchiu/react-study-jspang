// 面向对象编程-修饰符
/**
 * 访问修饰符
* 类中属性的访问可以用访问修饰符来进行限制。
*       访问修饰符分为：public、protected、private。
*           public:公有修饰符，可以在类内或者类外使用public修饰的属性或者行为，默认修饰符。
*           protected:受保护的修饰符，可以本类和子类中使用protected修饰的属性和行为。
*           private : 私有修饰符，只可以在类内使用private修饰的属性和行为。
 */

class XiaoJieJie2 {
    public sex: string
    protected name: string
    private age: number
    public constructor(sex:string,name:string,age:number) {
        this.sex = sex
        this.name = name
        this.age = age
    }
    public sayHello() {
        console.log(this.name + '对你说，小哥哥好！')
    }
    protected sayLove(){
        console.log('我爱你')
    }
}

let jiejie2: XiaoJieJie2 = new XiaoJieJie2('女', '刘亦菲', 26)
console.log(jiejie2.sex)
console.log(jiejie2.name)
console.log(jiejie2.age)
jiejie2.sayHello()
jiejie2.sayLove()

//  编辑时提示 报错  但转为ES5是可以正常输出结果的

// 只读属性修饰符
class SuperMan{
    public readonly name:string = '钢铁侠'
}
var man: SuperMan = new SuperMan()
console.log(man.name)
man.name = '黑寡妇'
console.log(man.name)