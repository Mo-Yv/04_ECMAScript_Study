let map = new Map([["info", "This is info"]]);
console.log(map);

/* size属性 */
const mapSize = map.size;
console.log("size =", mapSize);

/* 
	set() 
	set方法设置键名key对应的键值为value，然后返回整个 Map 结构。
	如果key已经有值，则键值会被更新，否则就新生成该键。
*/
map.set("num", 20230806);
map.set("fun", () => console.log("执行函数,Hello World"));
map.set("info", "INFO");

// 也可以链式写法
// map = new Map().set("name", "张三").set("age", "28").set("info", "INFO");

console.log(map);

/* 
	get(key)
	get方法读取key对应的键值，如果找不到key，返回undefined
*/
const mapFun = map.get("fun");
mapFun(); //Hello world

const mapName = map.get("name");
console.log("获取name:", mapName); //undefined

/* 
	has()
	has方法返回一个布尔值，表示某个键是否在当前 Map 对象之中
*/
const mapHasFun = map.has("fun");
console.log("是否包含fun:", mapHasFun); //true

const mapHasName = map.has("name");
console.log("是否包含name:", mapHasName); //false

/* 
	delete()
	delete()方法删除某个键，返回true。如果删除失败，返回false
*/
let mapDeleteFun = map.delete("fun");
console.log("是否成功删除fun:", mapDeleteFun);
console.log("是否包含fun:", map.has("fun"));

mapDeleteFun = map.delete("fun");
console.log("再次删除fun:", mapDeleteFun);

console.log(map);

/* 
	clear()
	clear()方法清除所有成员，没有返回值
*/
map.clear();
console.log("size =", map.size);
console.log(map);
