var db = connect('company')

// $in 修饰符
db.workmate.find({
  age: {
    $in: [25, 33]
  }
},
  {
    name: 1,
    "skill.skillOne": 1,
    age: 1,
    _id: 0
  }
)

// $or修饰符  查出年龄大于30岁的，或者会做PHP的信息
db.workmate.find({
  $or: [
    { age: { $gt3: 30 } },
    { "skill.skillThree": 'PHP' }
]},
  {
    name: 1,
    "skill.skillThree": 1,
    age: 1,
    _id: 0
  }
)


// $and用来查找几个key值都满足 查询同事中大于30岁并且会做PHP的信息
db.workmate.find({
  $and: [
    { age: { $gte: 30 } },
    { "skill.skillThree": 'PHP' }
]},
  {
    name: 1,
    "skill.skillThree": 1,
    age: 1,
    _id: 0
  }
)

// $not修饰符  用来查询除条件之外的值，比如我们现在要查找除年龄大于20岁，小于30岁的人员信息
db.workmate.find({
  age: {
    $not: {
      $lte: 30,
      $gte: 20
    }
  }
},
  {
    name: 1,
    "skill.skillOne": 1,
    age: 1,
    _id: 0
  }
)