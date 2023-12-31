/* 
	Set 结构的实例有四个遍历方法，可以用于遍历成员:
	Set.prototype.keys()：返回键名的遍历器
	Set.prototype.values()：返回键值的遍历器
	Set.prototype.entries()：返回键值对的遍历器
	Set.prototype.forEach()：使用回调函数遍历每个成员

	需要特别指出的是，Set的遍历顺序就是插入顺序。
	这个特性有时非常有用，比如使用 Set 保存一个回调函数列表，调用时就能保证按照添加顺序调用。

	keys方法、values方法、entries方法返回的都是遍历器对象。
	由于 Set 结构没有键名，只有键值（或者说键名和键值是同一个值）
	所以keys方法和values方法的行为完全一致。
 */
const set = new Set([2, 0, 0, 2, 0, 5, 1, 4]);
console.log(set);

/* keys() */
const setKeys = set.keys();
// console.log(setKeys); //SetIterator {2, 0, 5, 1, 4}
// for (const iterator of setKeys) {
// 	console.log(iterator); //2 0 5 1 4
// }

/* values() */
const setValues = set.values();
// console.log(setValues); //SetIterator {2, 0, 5, 1, 4}
// for (const iterator of setValues) {
// 	console.log(iterator); //2 0 5 1 4
// }

/* entries() */
const setEntries = set.entries();
// console.log(setEntries);
// for (const iterator of setEntries) {
// 	console.log(iterator);
// }

/* forEach() 跟数组的forEach()一样 */
set.forEach((item, key) => {
	console.log(`key: ${key}, item: ${item}`); //2 0 5 1 4
	// console.log(item === key); //true
});

/* 直接遍历set */
// for (const iterator of set) {
// 	console.log(iterator); //2 0 5 1 4
// }

// for (const key in set) {
// 	console.log(key); //没有任何输出
// }
