// 索引查询 --- 普通查询性能
var startTime = (new Date()).getTime()

var db = connect('company')
// 跳过 5000 查询  db.randomInfo.find().skip(50000)
var result = db.randomInfo.find({
  username:"undefined4pi4n"
})

result.forEach(result => {
  printjson(result)
})

var endTime = (new Date()).getTime()

print("[SUCCESS]:THIS RUN TIME IS:" + (endTime - startTime) + "ms")
// 查询时间 875ms

// // 建立索引  --- 试着为用户名（username）建立索引
// db.randomInfo.ensureIndex({ username: 1 })
// // 查看现有索引
// db.randomInfo.getIndexes()
