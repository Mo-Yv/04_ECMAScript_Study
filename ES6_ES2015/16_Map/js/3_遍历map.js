/* 
	Map 结构原生提供三个遍历器生成函数和一个遍历方法
	Map.prototype.keys()：返回键名的遍历器。
	Map.prototype.values()：返回键值的遍历器。
	Map.prototype.entries()：返回所有成员的遍历器。
	Map.prototype.forEach()：遍历 Map 的所有成员。

	需要特别注意的是，Map 的遍历顺序就是插入顺序
 */
const map = new Map([["a", 111]]).set("c", true).set("d", () => console.log("ccc"));
map.set(["b"], {
	info: "This is b",
});
console.log(map);

/* keys() 返回的是键(MapIterator) */
const mapKeys = map.keys();
console.log(mapKeys); //MapIterator {'a', 'c', 'd', Array(1)}
// console.log(mapKeys.next()); //{value: 'a', done: false}
// console.log(mapKeys.next());
// console.log(mapKeys.next());
// console.log(mapKeys.next());
// console.log(mapKeys.next()); //{value: undefined, done: true}

/* values() 返回的是值(MapIterator) */
const mapValues = map.values();
console.log(mapValues);
// console.log(mapValues.next()); //{value: 111, done: false}
// console.log(mapValues.next());
// console.log(mapValues.next());
// console.log(mapValues.next());
// console.log(mapValues.next()); //{value: undefined, done: true}

/* entries() 返回的是键值对(MapIterator) */
const mapEntries = map.entries();
console.log(mapEntries);
// console.log(mapEntries.next()); //{value: ['a', 111], done: false}
// console.log(mapEntries.next());
// console.log(mapEntries.next());
// console.log(mapEntries.next());
// console.log(mapEntries.next()); // {value: undefined, done: true}

/* forEach() */
map.forEach((value, key, map) => {
	console.table([{
		键名: key,
		键值: value,
		this: map,
	}]);
});
