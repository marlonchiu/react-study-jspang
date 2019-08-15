var db = connect('company')
// $set修改器
// db.workmate.update({ "name": "MinJie"}, {
//   "$set": {
//     sex: 2,
//     age: 21
//   }
// })

// 修改嵌套内容(内嵌文档)
db.workmate.update({
  "name": "MinJie"
}, {
  "$set": {
    "skill.skillThree": 'word'
  }
})

// $unset用于将key删除
// db.workmate.update({
//   "name": "MinJie"
// }, {
//   $unset: {
//     "age": ''
//   }
// })

// db.workmate.update({
//   "name": "MinJie"
// }, {
//   $set: {
//     "age": 23
//   }
//   })
  
// $inc对数字进行计算
// db.workmate.update({ "name": "MinJie" }, { $inc: { "age": -2 } })

// multi选项
// db.workmate.update({}, { $set: { interset: ['basketball'] } }, { multi: true })

// upsert选项
db.workmate.update({ name: 'xiaoWang' }, { $set: { age: 20 } }, { upsert: true })


print('[update]: The data was updated successfully');