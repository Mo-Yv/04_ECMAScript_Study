/* 
	Set 结构的实例有以下属性:
	Set.prototype.constructor：构造函数，默认就是Set函数。
	Set.prototype.size：返回Set实例的成员总数。

	Set 实例的方法分为两大类：
	1.操作方法（用于操作数据）
	2.遍历方法（用于遍历成员）。

	4个操作方法:
	Set.prototype.add(value)：添加某个值，返回 Set 结构本身。
	Set.prototype.delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
	Set.prototype.has(value)：返回一个布尔值，表示该值是否为Set的成员。
	Set.prototype.clear()：清除所有成员，没有返回值。
 */
/* 创建Set实例对象 */
const set = new Set([2, 0, 0, 2, 0, 5, 0, 1, 4]);
console.log(set);

/* size属性 */
// console.log(set.size);

/* 
	add() 添加某个成员
	返回新的set
	add方法只接受一个参数,如果有多个则忽略第一个以外的参数
	不传参数就没有任何影响
*/
// let isAdd = set.add("A", {}); //只添加了"A",且不会报错
// console.log(isAdd);

// 添加多个成员
// isAdd = set.add("A").add("a").add("a");
// console.log(isAdd);

// 也可以遍历某个对象,然后循环添加
// ["A","A","a","a"].forEach(item => set.add(item));
// console.log(set);

/* 
	delete() 某个删除成员
	返回一个boolean值,表示是否删除成功
	delete方法也和add一样,只接受一个参数
	不传参数就没有任何影响,返回false
*/
// 删除存在的元素
// let isDelete = set.delete(2);
// console.log("删除2:", isDelete); //true

// // 删除不存在的元素
// isDelete = set.delete("A");
// console.log("删除'A':", isDelete); //false

// console.log(set); //0 5 1 4

/* 
	has() 表示是否存在某个成员
	返回一个boolean值
*/
// let isHas = set.has(2);
// console.log(isHas); //true

// isHas = set.has("A");
// console.log(isHas); //false

// // 判断是否包含对象
// const obj = {a: 1};
// set.add(obj);
// isHas = set.has(obj);
// console.log(isHas); //true

// set.add({a: 1});
// isHas = set.has({a: 1});
// console.log(isHas); //false

// console.log(set);

/* 
	clear() 删除所有set成员
	没有返回值
*/
const isClear = set.clear();
console.log(isClear); //undefined
console.log(set);
