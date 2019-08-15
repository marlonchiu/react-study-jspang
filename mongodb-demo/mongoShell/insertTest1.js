var startTime = (new Date()).getTime() //得到开始时间
var  db = connect('log')  //链接数据库
//开始循环
for (let i = 0; i < 1000; i++){
  db.test.insert({ num: i })
}
 
var runTime = (new Date()).getTime() - startTime //计算时间差
print('This run this is:' + runTime + 'ms') //打印出来