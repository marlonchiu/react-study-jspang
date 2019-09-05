// 类是对象具体事务的一个抽象，对象是类的具体表现

class XiaoJieJie{
    name: string
    age: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    sayHello() {
        console.log(this.name + '对你说，小哥哥好！')
    }
    
}

let jiejie: XiaoJieJie = new XiaoJieJie('刘亦菲', 18)
console.log(jiejie)
jiejie.sayHello()