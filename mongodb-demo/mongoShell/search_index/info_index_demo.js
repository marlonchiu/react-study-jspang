// 全文索引

var db = connect('company')

// 建立一个集合（collections）-info
db.info.insert({ contextInfo: "I am a programmer, I love life, love family. Every day after work, I write a diary." })

db.info.insert({ contextInfo: "I am a programmer, I love PlayGame, love drink. Every day after work, I playGame and drink." })

// 建立全文索引
db.info.ensureIndex({ contextInfo: 'text' })

// 全文索引查找 
// - 建立好了全文索引就可以查找了，查找时需要两个关键修饰符:
// - $text: 表示要在全文索引中查东西。
// - $search:后边跟查找的内容。
db.info.find({ $text: { $search: "programmer" } })

// 查找多个词

// 全文索引是支持多个次查找的，
// 查找数据中有programmer，family，diary，drink的数据（这是或的关系），所以两条数据都会出现
db.info.find({ $text: { $search: "programmer family diary drink" } })

// 希望不查找出来有drink这个单词的记录，我们可以使用“-”减号来取消。
db.info.find({ $text: { $search: "programmer family diary -drink" } })

// 转义符
// 全文搜索中是支持转义符的，比如我们想搜索的是两个词（love PlayGame和drink），这时候需要使用\斜杠来转意。

db.info.find({ $text: { $search: "\"love PlayGame\" drink" } })
