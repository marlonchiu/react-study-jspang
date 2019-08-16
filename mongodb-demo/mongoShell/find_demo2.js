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