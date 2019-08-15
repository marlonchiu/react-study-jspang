var startTime = (new Date()).getTime() //得到开始时间
var  db = connect('log')  //链接数据库

// 声明空数组
var tempArr = [] 
for (let i = 0; i < 1000; i++){
  tempArr.push({ num: i })
}
db.test.insert(tempArr) // 批量一次插入
 
var runTime = (new Date()).getTime() - startTime //计算时间差
print('This run this is:' + runTime + 'ms') //打印出来