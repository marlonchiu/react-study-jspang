// 复合索引

// 建立索引  --- 试着为用户名（username）建立索引
// db.randomInfo.ensureIndex({ username: 1 })
// db.randomInfo.ensureIndex({randNum0:1})
// //查看现有索引
// db.randomInfo.getIndexes()

// 两个索引同时查询
var startTime = (new Date()).getTime()
var db = connect('company')
var result = db.randomInfo.find({
  username: "undefined4pi4n",
  randNum0: 565509
}).hint({ randNum0: 1 })  // 指定索引查询（hint）

result.forEach(result => {
  printjson(result)
})

var endTime = (new Date()).getTime()
print("[SUCCESS]:THIS RUN TIME IS:" + (endTime - startTime) + "ms")
// 查询时间 8ms
// 从性能上看并没有什么特殊的变化，查询时间还是在8ms左右。
// MongoDB的复合查询是按照我们的索引顺序进行查询的

// 删除索引
// db.randomInfo.dropIndex('randNum0_1')
