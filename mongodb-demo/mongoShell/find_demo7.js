// hasNext循环结果

// var db = connect("company")  // 进行链接对应的集合collections
// var result = db.workmate.find() // 声明变量result，并把查询结果赋值给result
// // 利用游标的hasNext()进行循环输出结果。
// while (result.hasNext()) {
//   printjson(result.next())  //用json格式打印结果
// }


// forEach循环

// 利用hasNext循环结果，需要借助while的帮助，
// MongoDB也为我们提供了forEach循环，现在修改上边的代码，使用forEach循环来输出结果。

var db = connect("company")  // 进行链接对应的集合collections
var result = db.workmate.find() // 声明变量result，并把查询结果赋值给result
// 利用forEach循环
result.forEach(function (result) {
  printjson(result)
})