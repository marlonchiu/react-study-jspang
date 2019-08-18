// 分页展示
db.workmate.find(
    {},
    {
        name: true,
        age: true,
        _id: false
    }).limit(0).skip(2).sort({ age: 1 }
)

// 查询年龄大于30岁的人员
db.workmate.find(
    { $where: "this.age>30" },
    { name: true, age: true, _id: false }
)
// this指向的是workmate（查询集合）本身。
// 这样我们就可以在程序中随意调用。
// 虽然强大和灵活，但是这种查询对于数据库的压力和安全性都会变重，
// 所以在工作中尽量减少$where修饰符的使用。