var db = connect('company')
// $push追加数组/内嵌文档值
// db.workmate.update({ name: 'xiaoWang' }, { $push: { interest: 'draw' } })
// db.workmate.update({ name: 'MinJie' }, { $push: { "skill.skillFour": 'draw' } })

// $ne查找是否存在
// db.workmate.update({ name: 'xiaoWang', "interest": { $ne: 'playGame' } }, { $push: { interest: 'playGame' } })

// $addToSet 升级版的$ne
// db.workmate.update({ name: "xiaoWang" }, { $addToSet: { interest: "readBook" } })

// $each批量追加
// var newInterset = ["Sing", "Dance", "Code"]
// db.workmate.update({ name: "xiaoWang" }, { $addToSet: { interest: { $each: newInterset } } })

// $pop 删除数组值
// $pop只删除一次，并不是删除所有数组中的值。而且它有两个选项，一个是1和-1。
// 1：从数组末端进行删除  -1：从数组开端进行删除

// db.workmate.update({ name: 'xiaoWang' }, { $pop: { interest: 1 } })

// 数组定位修改
// 修改xiaoWang的第三个兴趣为编码（Code），注意这里的计数是从0开始的
db.workmate.update({ name: 'xiaoWang' }, { $set: { "interest.2": "Code" } })


print('[update]: The data was updated successfully');