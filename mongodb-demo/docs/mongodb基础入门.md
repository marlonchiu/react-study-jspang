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

参考：[MongoDB 教程 | 菜鸟教程](https://www.runoob.com/mongodb/mongodb-tutorial.html)

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

## 第12节：查询：find的数组查询

* **基本数组查询**

* **`$all`数组多项查询** ： 对数组中的对象进行查询，是需要满足所有条件的

* **`$in`数组的或者查询** ： 满足数组中的一项就可以被查出来

* **`$size`数组个数查询** : 根据数组的数量查询出结果

* **`$slice`显示选项**: 并不需要显示出数组中的所有值，而是只显示前两项

* 查询演示：

  ```javascript
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
  ```

## 第13节：查询：find的参数使用方法

**在操作`find方法`的`第一个参数（query）`和`第二个参数（fields）`。`find`还有几个常用的参数，这些参数多用在分页和排序上**

* `find`参数：
  
  * `query`：这个就是查询条件，MongoDB默认的第一个参数。
  * `fields`：（返回内容）查询出来后显示的结果样式，可以用true和false控制是否显示。
  * `limit`：返回的数量，后边跟数字，控制每次查询返回的结果数量。
  * `skip`: 跳过多少个显示，和limit结合可以实现分页。
  * `sort`：排序方式，从小到大排序使用1，从大到小排序使用-1
  
  ```javascript
  // 分页展示
  db.workmate.find(
      {},
      {
          name: true,
          age: true,
          _id: false
      }).limit(0).skip(2).sort({ age: 1 }
  )
  ```

* **`$where`修饰符**

  它是一个非常强大的修饰符，但强大的背后也意味着有风险存在。它可以让我们在条件里使用javascript的方法来进行复杂查询。

  ```javascript
  // 查询年龄大于30岁的人员
  db.workmate.find(
      { $where: "this.age>30" },
      { name: true, age: true, _id: false }
  )
  // this指向的是workmate（查询集合）本身。
  // 这样我们就可以在程序中随意调用。
  // 虽然强大和灵活，但是这种查询对于数据库的压力和安全性都会变重，
  // 所以在工作中尽量减少$where修饰符的使用。
  ```

## 第14节：查询：find如何在js文本中使用

* `find`查询如何才终端中`load()`执行

* **hasNext循环结果**

  ```javascript
  // hasNext循环结果
  
  var db = connect("company")  // 进行链接对应的集合collections
  var result = db.workmate.find() // 声明变量result，并把查询结果赋值给result
  // 利用游标的hasNext()进行循环输出结果。
  while (result.hasNext()) {
    printjson(result.next())  //用json格式打印结果
  }
  ```

* **`forEach`循环**

  ```javascript
  // forEach循环
  // 利用hasNext循环结果，需要借助while的帮助，
  // MongoDB也为我们提供了forEach循环，现在修改上边的代码，使用forEach循环来输出结果。
  
  var db = connect("company")  // 进行链接对应的集合collections
  var result = db.workmate.find() // 声明变量result，并把查询结果赋值给result
  // 利用forEach循环
  result.forEach(function (result) {
    printjson(result)
  })
  ```

* `forEach`循环更为优雅。这两种方法都是非常不错的,凭借自己爱好进行选择吧

## 第15节：索引:构造百万级数据

* 构造百万级的数据集合

  ```javascript
  // 构造百万级的数据集合
  
  // 生成随机数
  function GetRandomNum(min, max) {
    let range = max - min  //得到随机数区间
    let rand = Math.random() //得到随机值
    return (min + Math.round(rand * range)) //最小值+随机数取整 
  }
  // console.log(GetRandomNum(10000, 99999))
  
  // 生成随机用户名
  function GetRadomUserName(min, max) {
    let tempStringArray = "123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM".split("") //构造生成时的字母库数组
    let outPuttext = "" // 最后输出的变量
    // 进行循环，随机生产用户名的长度，这里需要生成随机数方法的配合
    for (let i = 1; i < GetRandomNum(min, max); i++){
      // 随机抽取字母，拼装成需要的用户名
      outPuttext = outPuttext + tempStringArray[GetRandomNum(0, tempStringArray.length)]
    }
    return outPuttext
  }
  // console.log(GetRadomUserName(7, 16))
  
  // 插入200万数据
  var startTime = (new Date()).getTime()
  
  var db = connect('company')
  db.randomInfo.drop()
  var tempInfo = []
  for (let i = 0; i < 2000000; i++){
    tempInfo.push({
      username: GetRadomUserName(7, 16),
      regeditTime: new Date(),
      randNum0: GetRandomNum(100000, 999999),
      randNum1: GetRandomNum(100000, 999999),
      randNum2: GetRandomNum(100000, 999999),
      randNum3: GetRandomNum(100000, 999999),
      randNum4: GetRandomNum(100000, 999999),
      randNum5: GetRandomNum(100000, 999999),
      randNum6: GetRandomNum(100000, 999999),
      randNum7: GetRandomNum(100000, 999999),
      randNum8: GetRandomNum(100000, 999999),
      randNum8: GetRandomNum(100000, 999999)
    })
  }
  
  db.randomInfo.insert(tempInfo)
  var endTime = (new Date()).getTime()
  
  print("[demo]:------" + (endTime - startTime) + "ms")
  ```

* 使用 `db.randomInfo.stats()`这个命令查看数据中的数据条数

## 第16节：索引：索引入门

* **索引查询** --- 普通查询性能

  ```javascript
  // 索引查询 --- 普通查询性能
  var startTime = (new Date()).getTime()
  
  var db = connect('company')
  // 跳过 5000 查询  db.randomInfo.find().skip(50000)
  var result = db.randomInfo.find({
    username:"undefined4pi4n"
  })
  
  result.forEach(result => {
    printjson(result)
  })
  
  var endTime = (new Date()).getTime()
  
  print("[SUCCESS]:THIS RUN TIME IS:" + (endTime - startTime) + "ms")
  
  // 查询时间 875ms左右
  ```

* **建立索引** `createIndex()`

  > *注意在 3.0.0 版本前创建索引方法为 db.collection.ensureIndex()，之后的版本使用了 db.collection.createIndex() 方法，ensureIndex() 还能用，但只是 createIndex() 的别名。*

  * 语法

    ```javascript
    db.collection.createIndex(keys, options)

    // 语法中 Key 值为你要创建的索引字段，1 为指定按升序创建索引，如果你想按降序来创建索引指定为 -1 即可。
    ```

  * 用法实例：

  ```javascript
  // 建立索引  --- 试着为用户名（username）建立索引
  db.randomInfo.createIndex({ username: 1 })
  
  // or
  db.randomInfo.ensureIndex({ username: 1 })
  
  // 复合索引
  db.col.createIndex({"title":1,"description":-1})
  ```

* **查看现有索引**

  ```javascript
  // 查看现有索引
  
  db.randomInfo.getIndexes()
  ```

* 建立索引后再次执行查询 `load('./index_demo2.js')`，时间下降到 7ms了，随机波动，不超过20ms
  
* 无论是在关系型数据库还是文档数据库，建立索引都是非常重要的。索引这东西是要消耗硬盘和内存资源的，所以还是要根据程序需要进行建立了。**MongoDB也给我们进行了限制，只允许我们建立64个索引值**。

## 第17节：索引：复合索引

* **索引中的小坑**

  * 通过实际开发和性能对比，总结了几条不用索引的情况（不一定对，但是自己的经验之谈）。

  * 数据不超万条时，不需要使用索引。性能的提升并不明显，而大大增加了内存和硬盘的消耗。
  * 查询数据超过表数据量30%时，不要使用索引字段查询。实际证明会比不使用索引更慢，因为它大量检索了索引表和我们原表。（如查询员工的性别）
  * 数字索引，要比字符串索引快的多，在百万级甚至千万级数据量面前，使用数字索引是个明确的选择。
  * 把你经常查询的数据做成一个内嵌数据（对象型的数据），然后集体进行索引。

* **复合索引** : 复合索引就是两条以上的索引

  ```javascript
  // db.randomInfo.ensureIndex({ username: 1 })
  
  // 增加建立randNum0 的索引
  db.randomInfo.ensureIndex({randNum0:1})
  // 查看现有索引
  db.randomInfo.getIndexes()
  ```

* **两个索引同时查询**

  ```javascript
  var startTime = (new Date()).getTime()
  var db = connect('company')
  
  var result = db.randomInfo.find({
    username: "undefined4pi4n",
    randNum0: 565509
  })
  
  result.forEach(result => {
    printjson(result)
  })
  
  var endTime = (new Date()).getTime()
  print("[SUCCESS]:THIS RUN TIME IS:" + (endTime - startTime) + "ms")
  
  // 查询时间 8ms
  // 从性能上看并没有什么特殊的变化，查询时间还是在8ms左右。
  // MongoDB的复合查询是按照我们的索引顺序进行查询的
  ```

* 执行查询 `load('./index_demo3.js')`

* **指定索引查询（`hint`）**

  数字的索引要比字符串的索引快，这就需要一个方法来打破索引表的查询顺序，用我们自己指定的索引优先查询，这个方法就是`hint()`

  ```javascript
  // 打破索引表的查询顺序
  var result = db.randomInfo.find({
    username: "undefined4pi4n",
    randNum0: 565509
  }).hint({ randNum0: 1 })
  ```

* **删除索引**

  当索引性能不佳或起不到作用时，我们需要删除索引，删除索引的命令是`dropIndex()`. 

  ```javascript
  db.randomInfo.dropIndex('randNum0_1') //索引的唯一ID
  
  // 删除时填写的值，并不是我们的字段名称（key），而是我们索引查询表中的name值
  ```

## 第18节：索引：全文索引

* 准备数据

* **建立全文索引**

  ```javascript
  // 建立全文索引
  db.info.ensureIndex({ contextInfo: 'text' })
  
  // 需要注意的是这里使用text关键词来代表全文索引，我们在这里就不建立数据模型了
  ```

* **全文索引查找**

  * 建立好了全文索引就可以查找了，查找时需要两个关键修饰符:

  * `$text`: 表示要在全文索引中查东西。

  * `$search`:后边跟查找的内容。

    ```javascript
    db.info.find({$text:{$search:"programmer"}})
    ```

* **查找多个词**

  ```javascript
  // 全文索引是支持多个次查找的，
  // 查找数据中有programmer，family，diary，drink的数据（这是或的关系），所以两条数据都会出现
  db.info.find({ $text: { $search: "programmer family diary drink" } })
  
  // 希望不查找出来有drink这个单词的记录，我们可以使用“-”减号来取消。
  db.info.find({ $text: { $search: "programmer family diary -drink" } })
  ```

* **转义符：**

  ```javascript
  // 全文搜索中是支持转义符的，比如我们想搜索的是两个词（love PlayGame和drink），这时候需要使用\斜杠来转意。
  
  db.info.find({ $text: { $search: "\"love PlayGame\" drink" } })
  ```

##  第19节：管理:用户的创建、删除与修改

* **创建用户：**

  首先要进入我们的`admin`库中，进入方法是直接使用`use admin `就可以。进入后可以使用`show collections`来查看数据库中的集合。默认是只有一个集合的`（system.version）`。

  * 语法： `db.createUser()`
  * 展示代码：

  ```javascript
  // 创建用户权限
  db.createUser({  
    user: "marlon",  
    pwd: "123456",  
    customData: {
      name: 'marlon',
      email: 'marlon@126.com',
      age: 18,
    },
    roles: ['read']  
  })
  
  // or
  // 单独配置一个数据库的权限，比如我们现在要配置compay数据库的权限为读写
  db.createUser({  
    user: "jspang",  
    pwd: "123456",  
    customData: {
      name: '技术胖',
      email: 'web0432@126.com',
      age: 18,
    },
    roles: [
      {
        role: "readWrite",
        db: "company"
      },
      'read'
    ]  
  })
  
  
  /**
  内置角色：
    数据库用户角色：read、readWrite；
    数据库管理角色：dbAdmin、dbOwner、userAdmin;
    集群管理角色：clusterAdmin、clusterManager、clusterMonitor、hostManage；
    备份恢复角色：backup、restore；
    所有数据库角色：readAnyDatabase、readWriteAnyDatabase、userAdminAnyDatabase、dbAdminAnyDatabase
    超级用户角色：root
    内部角色：__system
   */
  ```

  * 数据库内置角色配置说明：
    1. 数据库用户角色：read、readWrite；
    2. 数据库管理角色：dbAdmin、dbOwner、userAdmin;
    3. 集群管理角色：clusterAdmin、clusterManager、clusterMonitor、hostManage；
    4. 备份恢复角色：backup、restore；
    5. 所有数据库角色：readAnyDatabase、readWriteAnyDatabase、userAdminAnyDatabase、dbAdminAnyDatabase
    6. 超级用户角色：root
    7. 内部角色：__system

* **查找用户信息** `db.system.users.find()`

  ```javascript
  // 查找用户信息
  db.system.users.find()
  ```

* **删除用户** `db.system.users.remove({ user: "marlon" })`

  ```javascript
  // 删除用户
  db.system.users.remove({ user: "marlon" })
  ```

* **鉴权** `db.auth(name, pwd)`

  ```javascript
  // 验证用户的用户名密码是否正确，就需要用到MongoDB提供的鉴权操作。也算是一种登录操作
  
  db.auth("jspang", "123456")
  // 正确返回1，如果错误返回0。（Error：Authentication failed。）
  ```

* **启动建权** `mongod --auth`

  重启MongoDB服务器，然后设置必须使用鉴权登录。

  ```javascript
  // cmd 重新启动

  mongod --auth
  ```

* **登录** `mongo  -u jspang -p 123456 127.0.0.1:27017/admin`

  如果在配置用户之后，用户想登录，可以使用mongo的形式，不过需要配置用户名密码：

  ```javascript
  mongo  -u jspang -p 123456 127.0.0.1:27017/admin
  ```



## 第20节：管理：备份和还原

* 对数据库的备份和还原: `mongodump`和`mongorestore`两个命令

* **备份`mongodump`**

  * mongodump备份的基本格式

    ```javascript
    mongodump
        --host 127.0.0.1
        --port 27017
        --out D:/databack/backup   // 备份地址
        --collection myCollections
        --db test
        --username username
        --password password
    ```

  * 备份演示：

    ```javascript
    mongodump --host 127.0.0.1 --port 27017 --out D:/databack/
    ```

* **数据恢复`mongorestore`**

  * mongorestore恢复基本格式

    ```javascript
    mongorestore
        --host 127.0.0.1
        --port 27017
        --username username
        --password password
        <path to the backup>
    ```

  * 恢复演示

    ```javascript
    mongorestore --host 127.0.0.1 --port 27017 D:/databack/
    ```

* 两个命令很简单，甚至你可以写成脚本和定时任务，让他每天自己执行。但是如果你真的使用了MongoDB数据库，这是一个最基本的操作。

## 第21节：管理：图形界面管理（完结）

* `NoSQL Manager for MongoDB`
* `Studio 3T`
* `MongoDB Compass`

