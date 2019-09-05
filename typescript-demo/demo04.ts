// function searchPet(age: number): string {
//     return '找' + age + '岁的小宠物'
// }

// var age: number = 26
// var result: string = searchPet(age)

// console.log(result)
console.log('----------------')

// 有可选的参数的函数
// function searchXiaoJieJie(age: number,stature?:string): string {
//     let yy: string = ''
//     yy = '找到了' + age + '岁'
//     if (stature != undefined) {
//         yy = yy + stature
//     }
//     return yy + '的小姐姐'
// }

// var result1: string = searchXiaoJieJie(26)
// console.log(result1)
// var result2: string = searchXiaoJieJie(26, '大长腿')
// console.log(result2)

// // 有默认参数的函数
// function searchXiaoJieJie2(age: number=18,stature:string='高学历'): string {
//     let yy: string = ''
//     yy = '找到了' + age + '岁'
//     if (stature != undefined) {
//         yy = yy + stature
//     }
//     return yy + '的小姐姐'
// }

// var result3: string = searchXiaoJieJie2()
// console.log(result3)
// var result4: string = searchXiaoJieJie2(25, '大长腿')
// console.log(result4)

// 有剩余参数的函数
console.log('--------有剩余参数的函数---------')
function searchXiaoJieJie3(age: number=18, ...xuqiu:string[]): string {
    let yy: string = ''
    yy = '找到了' + age + '岁'
    for (let i = 0; i<xuqiu.length; i++) {
        yy = yy + xuqiu[i]
        if(i < xuqiu.length - 1){
            yy = yy + '、'
        }
    }
    yy = yy + '的小姐姐'
    return yy
}

var result5: string = searchXiaoJieJie3()
console.log(result5)
var result6: string = searchXiaoJieJie3(25, '大长腿', '高学历', '瓜子脸')
console.log(result6)