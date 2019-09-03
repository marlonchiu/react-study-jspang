// 面向对象编程 - 继承和重写

// 继承：允许我们创建一个类（子类），从已有的类（父类）上继承所有的属性和方法，
//          子类可以新建父类中没有的属性和方法。

class JsPang {
    public name: string
    public age: number
    public skill: string
    public constructor(name: string, age: number, skill: string) {
        this.name = name
        this.age = age
        this.skill = skill
    }
    public interest() {
        console.log('技术胖的兴趣 -- 找小姐姐')
    }
}

// 继承
class JsShuai extends JsPang{
    public yanzhi: string = '血气阳刚'
    // 重写
    public interest() {
        super.interest()
        console.log('建立电商平台')
    }
    public makeMoney() {
        console.log('小目标一天一个亿')
    }
}

let xiaoshuai: JsShuai = new JsShuai('技术帅', 17, '绘画')
console.log(xiaoshuai.skill)
console.log(xiaoshuai.yanzhi)
xiaoshuai.interest()
xiaoshuai.makeMoney()