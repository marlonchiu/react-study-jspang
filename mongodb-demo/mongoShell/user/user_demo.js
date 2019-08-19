// 用户的创建、删除与修改

// 1.创建用户：
// 首先要进入我们的admin库中，进入方法是直接使用use admin 就可以。
// 进入后可以使用show collections来查看数据库中的集合。
// 默认是只有一个集合的（system.version）。

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

// 查找用户信息
db.system.users.find()

// 删除用户
db.system.users.remove({ user: "marlon" })

// 鉴权：
// 验证用户的用户名密码是否正确，就需要用到MongoDB提供的鉴权操作。也算是一种登录操作

db.auth("jspang", "123456")
// 正确返回1，如果错误返回0。（Error：Authentication failed。）

// 启动鉴权
// 重启MongoDB服务器，然后设置必须使用鉴权登录。
// mongod --auth

// 启动后，用户登录只能用用户名和密码进行登录，
// 原来的mongo形式链接已经不起作用了。相应的用户权限也对应妥当。
// 实际项目中我们启动服务器必须使用鉴权形式。


// 登录

// 如果在配置用户之后，用户想登录，可以使用mongo的形式，不过需要配置用户名密码：

// mongo -u jspang -p 123456 127.0.0.1:27017/admin
