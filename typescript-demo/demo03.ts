var age: number = 18
var stature: number = 187.5
console.log(age)
console.log(stature)
console.log('----------------')

var jspang: string = '技术胖 jspang.com'
console.log(jspang)

console.log('----------------')
var flag: boolean = true
console.log(flag, !flag)

console.log('----------------')
// enum 枚举类型
enum SEASON { spring = "春季", summer = "夏季", autumn = "秋季", winter = "冬季" }
console.log(SEASON)
console.log(SEASON.summer)

console.log('----------------')
// any 任意类型
var t: any = 110
t = "jspang"
t = true
console.log(t)

console.log('----------------')
// null 类型

console.log('----------------')
// array 类型
var list1: number[] = [11, 22, 33]
console.log(list1)

var list: Array<number> = [1, 2, 3]
console.log(list)

// 元组类型（tuple）  属于数组的一种
let list2: [number, string, boolean] = [123, 'this is ts', true]
console.log(list2)

// 枚举类型
enum Flag {
    success = 200,
    error = 404,
    server = 500
}
let sFlag: Flag = Flag.success
console.log(sFlag)

enum Err {
    'undefined' = -1,
    'null' = -2,
    'success' = 1
}
// let err: Err = Err['null']
let err: Err = Err.null  // 都可以
console.log(err)