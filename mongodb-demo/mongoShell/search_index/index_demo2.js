// 构造百万级的数据集合
// import { GetRandomNum, GetRadomUserName } from './index_demo1'
require('./index_demo1')

// 插入200万数据
var startTime = (new Date()).getTime()

var db = connect('company')
db.randomInfo.drop()
var tempInfo = []
for (let i = 0; i < 2000000; i++){
  tempInfo.push({
    username: GetRadomUserName(7, 16),
    regeditTime: new Date(),
    randNum0: GetRandomNum(100000, 999999),
    randNum1: GetRandomNum(100000, 999999),
    randNum2: GetRandomNum(100000, 999999),
    randNum3: GetRandomNum(100000, 999999),        
    randNum4: GetRandomNum(100000, 999999),        
    randNum5: GetRandomNum(100000, 999999),        
    randNum6: GetRandomNum(100000, 999999),        
    randNum7: GetRandomNum(100000, 999999),        
    randNum8: GetRandomNum(100000, 999999),        
    randNum8: GetRandomNum(100000, 999999),        
  })
}

db.randomInfo.insert(tempInfo)
var endTime = (new Date()).getTime()

print("[demo]:------" + (endTime - startTime) + "ms")
