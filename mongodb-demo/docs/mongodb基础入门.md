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
