var db = connect('company')

// 修改了所有男士的数据，每个人增加了1000元钱(money)，然后用db.runCommand()执行
// db.workmate.update({ sex: 1 }, { $set: { money: 1000 } }, false, true)

// var resultMessage = db.runCommand({ getLastError: 1 })

// printjson(resultMessage)

// db.runCommand({ ping: 1 })
// 返回ok：1就代表链接正常

// findAndModify是查找并修改的意思。配置它可以在修改后给我们返回修改的结果
var myModify = {
  findAndModify: "workmate",
  query: { name: 'JSPang' },
  update: { $set: { age: 18 } },
  new: true   // 更新完成，需要查看结果，如果为false不进行查看结果
}

var ResultMessage = db.runCommand(myModify)
printjson(ResultMessage)