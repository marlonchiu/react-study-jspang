/** 
 * map数据结构 
 *    Map的灵活性要更好，你可以把它看成一种特殊的键值对，
 *    但你的key可以设置成数组，值也可以设置成字符串
 *  
 *  */
let json = {
    name: 'jspang',
    skill: 'web' 
}
console.log(json.name);
 
var map = new Map();
map.set(json, 'iam');
console.log(map); 
// Map(1) {{…} => "iam"}
//  上述 key 为json 对象

map.set('jspang',json);
console.log(map)


// 增删查  get delete size has clear
console.log(map.get(json))
console.log(map.size)
console.log(map.has('jspang'))

map.delete(json);
console.log(map)
map.clear()
