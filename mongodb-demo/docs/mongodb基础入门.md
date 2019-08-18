---
title: mongodb基础入门
date: '2019-08-15'
type: 技术
tags: Koa2 | Mongodb
sidebarDepth: 3
sidebar: auto
note: MongoDB是一个基于分布式文件存储的数据库，非关系型数据库。
---

# MongoDB基础入门

学习指导：[挑战全栈 MongoDB基础视频教程 (共21集)](http://www.jspang.com/posts/2017/12/16/mongodb.html)

## 第01节：认识和安装MongoDB

* **MongoDB是非关系型数据库**，要了解非关系型数据库就必须先了解关系型数据库，关系数据库，是建立在关系模型基础上的数据库。比较有名气的关系型数据库，比如Oracle、DB2、MSSQL、Mysql。

* 非关系数据库和关系型数据库的区别是什么？

  * 实质：非关系型数据库的实质：非关系型数据库产品是传统关系型数据库的功能阉割版，通过减少用不到或很少用的功能，来大幅度提高产品性能。
  * 价格：目前的非关系型数据库基本都是免费的，而比较有名气的关系型数据库都是收费的，比如：Oracle、DB2、MSSQL。MySql虽然是免费的，但是处理大型数据还是要提前作很多工作的。
  * 功能：实际开发中，很多业务需求，其实并不需要完整的关系型数据库功能，非关系型数据库的功能就足够使用了。这种情况下，使用性能更高、成本更低的非关系型数据库当然是更明智的选择。

* 了解关系型数据库和非关系型数据库的区别后，需要有一点的取舍，**比较复杂和大型的项目不建议使用非关系型数据库**，但是如果你想作个博客，CMS系统这类业务逻辑不复杂的程序，MongoDB是完全可以胜任的。

* MongoDB简介：

  * MongoDB是一个基于分布式文件存储的数据库，由C++语言编写。目的是为WEB应用提供扩展的高性能的数据存储解决方案。
  * MongoDB是一个介于关系型数据库和非关系型数据库之间的产品，是非关系型数据库当中功能最丰富，最像关系数据库的。他支持的数据结构非常松散，是类似json的bson格式，因此可以存储比较复杂的数据类型。
  * Mongo最大的特点是他支持的查询语言非常强大，其语法有点类似于面向对象的查询语言，几乎可以实现类似关系数据库单表查询的绝大部分功能，而且还支持对数据建立索引。

* 安装忽略

* **运行MongoDB服务端：**

  * 安装好MongoDB数据库后，我们需要启用服务端才能使用。启用服务的命令是：Mongod。
  * 打开命令行: 先打开运行（快捷键win+R），然后输入cmd后回车，就可以打开命令行工具。
  * 执行mongod: 在命令中直接输入mongod，但是你会发现服务并没有启动，报了一个exception，服务停止了。
  * 新建文件夹:出现上边的错误，是因为我们没有简历Mongodb需要的文件夹，`一般是安装盘的根目录，建立data/db,这两个文件夹`。
  * 运行mongod：这时候服务就可以开启了，链接默认端口是27017。

* **链接服务：**

  ```bash
  # cmd 输入 mongo
  mongo
  
  #查看存在数据库命令：
  show dbs
  
  # 查看数据库版本命令：
  db.version()
  ```

## 第02节：Mongo基本命令-1

* **MongoDB的存储结构** 以前我们的关系型数据库的数据结构都是顶层是库，库下面是表，表下面是数据。但是MongoDB有所不同，库下面是集合，集合下面是文件。

* **基础Shell命令：**
  * `show dbs` :显示已有数据库，如果你刚安装好，会默认有`local、admin、config`，这是MongoDB的默认数据库，我们在新建库时是不允许起这些名称的。
  * `use admin`： 进入数据，也可以理解成为使用数据库。成功会显示：switched to db admin。
  * `show collections`: 显示数据库中的集合（关系型中叫表，我们要逐渐熟悉）。
  * `db`:显示当前位置，也就是你当前使用的数据库名称，这个命令算是最常用的，因为你在作任何操作的时候都要先查看一下自己所在的库，以免造成操作错误。

## 第03节：Mongo基本命令-2

* **数据操作基础命令：**
  * `use db（建立数据库）`：use不仅可以进入一个数据库，如果你敲入的库不存在，它还可以帮你建立一个库。但是在没有集合前，它还是默认为空。

  * `db.集合.insert( )`:新建数据集合和插入文件（数据），当集合没有时，这时候就可以新建一个集合，并向里边插入数据。

    ```bash
    db.user.insert({“name”:”jspang”})
    ```

  * `db.集合.find( )`:查询所有数据，这条命令会列出集合下的所有数据，可以看到MongoDB是自动给我们加入了索引值的。

    ```bash
    db.user.find()
    ```

  * `db.集合.findOne( )`:查询第一个文件数据，这里需要注意的，所有MongoDB的组合单词都使用首字母小写的驼峰式写法。

  * `db.集合.update({查询},{修改})`:修改文件数据，第一个是查询条件，第二个是要修改成的值。这里注意的是可以多加文件数据项的，比如下面的例子。

    ```bash
    db.jspang.update({"name":"jspang"},{"name":"jspang","age":"32"})
    ```

  * `db.集合.remove(条件)`：删除文件数据，注意的是要跟一个条件。

    ```bash
    db.user.remove({“name”:”jspang”})
    ```

  * `db.集合.drop()`:删除整个集合，这个在实际工作中一定要谨慎使用，如果是程序，一定要二次确认。

  * `db.dropDatabase()`: 删除整个数据库，在删除库时，一定要先进入数据库，然后再删除。实际工作中这个基本不用，实际工作可定需要保留数据和痕迹的。

## 第04节：用js文件写mongo命令

* 编写执行代码

  ```javascript
  // ./mongoShell/goTask.js
  
  var userName = 'jspang'  // 声明一个登录名  
  var timeStamp = Date.parse(new Date()) // 声明登录时的时间戳  
  var jsonDdatabase = {  // 组成JSON字符串
    "loginUnser": userName,
    "loginTime": timeStamp
  }
  var db = connect('log')  //链接数据库
  db.login.insert(jsonDdatabase) //插入数据
  
  print('[demo]log  print success')  //没有错误显示成功
  ```

* 执行

  ```bash
  # 链接数据库(cmd)
  mongo
  
  mongo goTask.js
  
  show dbs
  use log
  show collections
  db.login.find()
  ```

## 第05节：批量插入的正确方法

* 在操作数据库时要注意两个能力：
  * 第一个是快速存储能力。
  * 第二个是方便迅速查询能力。

* **批量插入**

  * 批量数据插入是以数组的方式进行的（如果写错，可以3个回车可以切出来）

  * 插入数据测试

    ```bash
    db.test.insert([
        {"_id":1},
        {"_id":2},
        {"_id":3}
    ])

    # 3.2版本以前的用法
    db.test.batchInsert([
        {"_id":1},
        {"_id":2},
        {"_id":3}
    ])
    ```

  * 注意一次插入不要超过48M，向.zip和大图片什么的尽量用静态存储，MongoDB存储静态路径就好。

* **批量插入性能测试**

  ```bash
  # 一个个插入  执行insertTest1.js  耗时622ms
  mongo insertTest1.js
  
  # 批量插入  执行insertTest2.js  耗时15ms
  mongo insertTest2.js
  ```

* 总结：在工作中一定要照顾数据库性能，这也是你水平的提现，一个技术会了很简单，但是要作精通不那么简单。学完这节，记得在工作中如果在循环插入和批量插入举起不定，那就选批量插入吧，它会给我们更优的性能体验。

* 范式流程：

  ```javascript
  var db = connect('company')  // 连接数据库
  var workmateArray = [workmate1, workmate2, workmate3]
  db.workmate.insert(workmateArray)  // 数据库插入集合
  print('[SUCCESS]: The data was inserted successfully.');
  ```

  

## 第06节：修改：Update常见错误

了解常见的错误操作

## 第07节：修改：初识update修改器

* **`$set`修改器**

  用来修改一个指定的键值(key)，这时候我们要修改上节课的sex和age就非常方便了，只要一句话就可以搞定。

  ```javascript
  db.workmate.update({ "name":"MinJie" }, { "$set": {sex:2,age:21} })
  ```

  修改好后，我们可以用db.workmate.find()来进行查看

* **修改嵌套内容(内嵌文档)**

  skill数据是内嵌的，这时候我们可以属性的形式进行修改，skill.skillThree

  ```javascript
  db.workmate.update({ "name": "MinJie" }, { $set: { "skill.skillThree": 'word' } })
  ```

* **`$unset`用于将key删除**

  作用其实就是删除一个key值和键

  ```javascript
  db.workmate.update({ "name": "MinJie" }, { $unset: { "age": '' } })
  
  // 直接用set进行添加
  ```

* **`$inc`对数字进行计算**

  ```javascript
  db.workmate.update({ "name": "MinJie" }, { $inc: { "age": -2 } })
  ```

* **`multi`选项**

  ```javascript
  db.workmate.update({}, { $set: { interset: ['basketball'] } }, { multi: true })
  
  //每个数据都发生了改变，multi是有ture和false两个值，true代表全部修改，false代表只修改一个（默认值）
  ```

* **`upsert`选项**

  upsert是在找不到值的情况下，直接插入这条数据

  ```javascript
  db.workmate.update({ name: 'xiaoWang' }, { $set: { age: 20 } }, { upsert: true })
  
  // upsert也有两个值：true代表没有就添加，false代表没有不添加(默认值)
  ```

## [#](http://www.jspang.com/posts/2017/12/16/mongodb.html#第08节：修改：update数组修改器)第08节：修改：update数组修改器

* **`$push`追加数组/内嵌文档值**

  `$push`的功能是追加数组中的值，但我们也经常用它操作内嵌稳文档，就是{}对象型的值

  ```javascript
  // $push追加数组/内嵌文档值
  db.workmate.update({ name: 'xiaoWang' }, { $push: { interest: 'draw' } })
  
  // $push修饰符还可以为内嵌文档增加值
  db.workmate.update({ name: 'MinJie' }, { $push: { "skill.skillFour": 'draw' } })
  ```

  **`$push`修饰符还可以为内嵌文档增加值**

* **`$ne`查找是否存在**

  **检查一个值是否存在，如果不存在再执行操作，存在就不执行**

  ```javascript
  db.workmate.update({ name: 'xiaoWang', "interest": { $ne: 'playGame' } }, { $push: { interest: 'playGame' } })
  
  // 总结：没有则修改，有则不修改。
  ```

* **`$addToSet` 升级版的`$ne`**

  `$ne`的升级版本（查找是否存在，不存在就push上去），操作起来更直观和方便，所以再工作中这个要比`$en`用的多。

  ```javascript
  // 查看小王(xiaoWang)兴趣(interest)中有没有阅读（readBook）这项，没有则加入读书(readBook)的兴趣.
  
  db.workmate.update({ name: "xiaoWang" }, { $addToSet: { interest: "readBook" } })
  ```

* **`$each`批量追加**

  可以传入一个数组，一次增加多个值进去，相当于批量操作，性能同样比循环操作要好很多，这个是需要我们注意的，工作中也要先组合成数组，然后用批量的形式进行操作。

  ```javascript
  // 给xiaoWang,一次加入三个爱好，唱歌（Sing），跳舞（Dance），编码（Code）
  
  var newInterset = ["Sing", "Dance", "Code"]
  db.workmate.update({ name: "xiaoWang" }, { $addToSet: { interest: { $each: newInterset } } })
  ```

* **`$pop` 删除数组值**

  `$pop`只删除一次，并不是删除所有数组中的值。而且它有两个选项，一个是1和-1。

    1：从数组末端进行删除；  -1：从数组开端进行删除

  ```javascript
  db.workmate.update({ name: 'xiaoWang' }, { $pop: { interest: 1 } })
  ```

* **`interest.int` 数组定位修改**

  修改数组的第几位，但并不知道是什么，这时候我们可以使用`interest.int` 的形式

  ```javascript
  // 修改xiaoWang的第三个兴趣为编码（Code），注意这里的计数是从0开始的
  
  db.workmate.update({ name: 'xiaoWang' }, { $set: { "interest.2": "Code" } })
  ```

## 第09节：修改：状态返回与安全

在修改时我们都会用`findAndModify`，它可以给我们返回来一些必要的参数，让我们对修改多了很多控制力，控制力的加强也就是对安全的强化能力加强。

* **应答式写入**

  在之前的操作都是非应答式写入，就是在操作完数据库后，它并没有给我们任何的回应和返回值，而是我们自己安慰自己写了一句话 `print(‘[update]:The data was updated successfully’)`。这在工作中是不允许的，因为根本不能提现我们修改的结果。应答式写入就会给我们直接返回结果（报表），结果里边的包含项会很多，这样我们就可以很好的进行程序的控制和安全机制的处理。有点像前端调用后端接口，无论作什么，后端都要给我一些状态字一样。

* **`db.runCommand( )`**

  它是数据库运行命令的执行器，执行命令首选就要使用它，因为它在Shell和驱动程序间提供了一致的接口。（几乎操作数据库的所有操作，都可以使用`runCommand来执行`）现在我们试着用`runCommand`来修改数据库，看看结果和直接用`db.collections.update`有什么不同。

  ```javascript
  // 修改了所有男士的数据，每个人增加了1000元钱(money)，然后用db.runCommand()执行
  db.workmate.update({ sex: 1 }, { $set: { money: 1000 } }, false, true)
  var resultMessage = db.runCommand({ getLastError: 1 })
  printjson(resultMessage)
  
  /*
  false：第一句末尾的false是upsert的简写，代表没有此条数据时不增加;
  true：true是multi的简写，代表修改所有，这两个我们在前边课程已经学过。
  getLastError:1 :表示返回功能错误，这里的参数很多，如果有兴趣请自行查找学习，
  printjson：表示以json对象的格式输出到控制台。
  */
  
  // 执行返回结果
  {
    "connectionId" : 9,
    "updatedExisting" : true,
    "n" : 3,
    "syncMillis" : 0,
    "writtenTo" : null,
    "err" : null,
    "ok" : 1
  }
  ```

* 查看是否和数据库链接成功

  ```javascript
  db.runCommand({ ping: 1 })
  
  // 返回ok：1就代表链接正常
  /*
  connecting to: mongodb://127.0.0.1:27017/company
  Implicit session: session { "id" : UUID("f8e213c6-c27b-4282-be47-df5a76eb72ae") }
  MongoDB server version: 4.0.10
  true
  */
  ```

* **findAndModify**

  * `findAndModify`是查找并修改的意思。配置它可以在修改后给我们返回修改的结果

  * **`findAndModify`属性值：**
    * `query`：需要查询的条件/文档
    * `sort`: 进行排序
    * `remove：[boolean]`是否删除查找到的文档，值填写true，可以删除。
    * `new:[boolean]`返回更新前的文档还是更新后的文档。
    * `fields`：需要返回的字段
    * `upsert`：没有这个值是否增加。

    ```javascript
    // findAndModify是查找并修改的意思。配置它可以在修改后给我们返回修改的结果
    var myModify = {
      findAndModify: "workmate",
      query: { name: 'JSPang' },
      update: { $set: { age: 18 } },
      new: true    // 更新完成，需要查看结果，如果为false不进行查看结果
    }

    var ResultMessage = db.runCommand(myModify)
    printjson(ResultMessage)

    // 返回结果  是最新的JSPang 数据
    ```

  * `findAndModify`的性能是没有直接使用`db.collections.update`的性能好，但是在实际工作中都是使用它，毕竟要商用的程序安全性还是比较重要的。
  
## 第10节：查询：find的不等修饰符

* 基础查找

  ```javascript
  // 简单查找
  db.workmate.find({ "skill.skillOne": "HTML + CSS" })
  
  // 筛选字段
  db.workmate.find(
    { "skill.skillOne": "HTML+CSS" },
    {
      name: true,
      "skill.skillOne": true,
      _id: false  // 不显示_id
    }
  )
  ```

* **不等修饰符**
  * `小于($lt)` : 英文全称less-than
  * `小于等于($lte)` ： 英文全称less-than-equal
  * `大于($gt)` : 英文全称greater-than
  * `大于等于($gte)`: 英文全称greater-than-equal
  * `不等于($ne)`: 英文全称not-equal

  ```javascript
  // 不等查找  年龄小于30大于25岁的人
  db.workmate.find(
    { age: { $lte: 30, $gte: 25 } },
    { name: true, age: true, "skill.skillOne": true, _id: false }
  )
  ```

* **日期查找**

  ```javascript
  var startDate = new Date('01/01/2018')
  
  db.workmate.find(
    { regeditTime: { $gt: startDate } },
    { name: true, age: true, "skill.skillOne": true, _id: false }
  )
  ```

* vscode清屏 `cls`

## 第11节：查询：find的多条件查询

* **`$in`修饰符** ：in修饰符可以轻松解决一键多值的查询情况

* **`$in`相对的修饰符是`$nin`修饰符**
* **`$or`修饰符**：用来查询多个键值的情况
* **`$nor`修饰符**
* **`$and`修饰符**：用来查找几个key值都满足的情况  
* **`$not`修饰符**： 用来查询除条件之外的值

* 查询演示：

  ```javascript
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
  ```
