/* 
	数组成员分组是一个常见需求，
	比如 SQL 有GROUP BY子句和函数式编程有 MapReduce 方法。
	现在有一个 "提案"，为JS新增了数组实例方法:
	group() 和 groupToMap()
	它们可以根据分组函数的运行结果，将数组成员分组

	group()的参数是一个分组函数，
	原数组的每个成员都会依次执行这个函数，
	确定自己是哪一个组

	group()的分组函数可以接受三个参数，
	依次是数组的当前成员、该成员的位置序号、原数组。
	分组函数的返回值应该是字符串(或可以自动转为字符串)，
	以作为分组后的组名

	group()的返回值是一个对象，
	该对象的键名就是每一组的组名，
	即分组函数返回的每一个字符串；
	该对象的键值是一个数组，
	包括所有产生当前键名的原数组成员

	group()还可以接受一个对象，作为第二个参数。
	该对象会绑定分组函数（第一个参数）里面的this，
	不过如果分组函数是一个箭头函数，该对象无效，
	因为箭头函数内部的this是固化的

	groupToMap()的作用和用法与group()完全一致，
	唯一的区别是返回值是一个 Map 结构，而不是对象。
	Map 结构的键名可以是各种值，
	所以不管分组函数返回什么值都会直接作为组名
	也就是 Map 结构的键名，不会强制转为字符串。
	这对于分组函数返回值是对象的情况，尤其有用

	按照字符串分组就使用group()，
	按照对象分组就使用groupToMap()
 */
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let result;

/* group() */
console.group("group");
{
	/* 2023/8/23 Chrome ES2023(ES14) Array原型对象上没有group方法 */
	if ("group" in arr.__proto__ || "group" in Array.prototype) {
		result = arr.group(item => (item % 2 === 0 ? "even" : "odd"));
		console.log(result);
	} else {
		console.warn("Array原型对象上没有group方法 Chrome");
	}
}
console.groupEnd();

/* groupToMap() */
console.group("groupToMap");
{
	/* 2023/8/23 Chrome ES2023(ES14) Array原型对象上没有groupToMap方法 */
	if ("group" in arr.__proto__ || "group" in Array.prototype) {
		const odd = { odd: true };
		const even = { even: true };
		result = array.groupToMap(item => (item % 2 === 0 ? even : odd));
		console.log(result);
	} else {
		console.warn("Array原型对象上没有groupToMap方法 Chrome");
	}
}
console.groupEnd();
