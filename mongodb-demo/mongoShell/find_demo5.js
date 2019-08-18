// 基本数组查询
// 查询一个人的爱好是’画画’,’聚会’,’看电影’
db.workmate.find(
  {
    interest: ['画画', '聚会', '看电影']
  },
  {
    name: 1,
    interest: 1,
    age: 1,
    _id: 0
  } 
)

// 查出看兴趣中有看电影的员工信息
db.workmate.find({
  interest: '看电影'
},
  {
    name: 1,
    interest: 1,
    age: 1,
    _id: 0
  } 
)

// $all-数组多项查询  查询出喜欢看电影和看书的人员信息
db.workmate.find({
  interest: {
    $all: ['看电影', '看书']
  }
},
  {
    name: 1,
    interest: 1,
    age: 1,
    _id: 0
  } 
)

// $in-数组的或者查询
// 用$all修饰符，是需要满足所有条件的，
// $in主要满足数组中的一项就可以被查出来（有时候会跟$or弄混）
// 查询爱好中有看电影的或者看书的员工信息
db.workmate.find({
  interest: {
    $in: ['看电影', '看书']
  }
},
  {
    name: 1,
    interest: 1,
    age: 1,
    _id: 0
  } 
)

// $size-数组个数查询
// $size修饰符可以根据数组的数量查询出结果。
// 查找兴趣的数量是5个人员信息
db.workmate.find({
  interest: {
    $size: 5
  }
},
  {
    name: 1,
    interest: 1,
    age: 1,
    _id: 0
  } 
)

// $slice-显示选项

// 有时候我并不需要显示出数组中的所有值，而是只显示前两项，
// 比如我们现在想显示每个人兴趣的前两项，而不是把每个人所有的兴趣都显示出来
db.workmate.find({
  // interest: {
  //   $size: 5
  // }
},
  {
    name: 1,
    interest: {$slice: 2},
    age: 1,
    _id: 0
  } 
)
// 想显示兴趣的最后一项，可以直接使用slice:-1，来进行查询