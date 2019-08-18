var db = connect('company')

// 简单查找
// db.workmate.find({ "skill.skillOne": "HTML + CSS" })

// 筛选字段
db.workmate.find(
  { "skill.skillOne": "HTML+CSS" },
  {
    name: true,
    "skill.skillOne": true,
    _id: false  // 不显示_id
  }
)
// 不等查找  年龄小于30大于25岁的人
db.workmate.find(
  { age: { $lte: 30, $gte: 25 } },
  { name: true, age: true, "skill.skillOne": true, _id: false } 
)

// 日期查找
var startDate = new Date('01/01/2018')

db.workmate.find(
  { regeditTime: { $gt: startDate } },
  { name: true, age: true, "skill.skillOne": true, _id: false }
)