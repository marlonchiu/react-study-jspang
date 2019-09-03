// 面向对象编程-命名空间
// 命名空间，又称内部模块，被用于组织有些具有内在联系的特性和对象
namespace shuaiGe{
    export class DeHua{
        public name: string = '刘德华'
        talk() {
            console.log('我是帅哥刘德华')
        }
    }
}

namespace baJie{
    export class DeHua{
        public name: string = '马德华'
        talk() {
            console.log('我是二师兄马德华')
        }
    }
}

let dehua1:shuaiGe.DeHua = new shuaiGe.DeHua()
let dehua2: baJie.DeHua = new baJie.DeHua()
console.log(dehua1.name)
dehua1.talk()
console.log(dehua2.name)
dehua2.talk()