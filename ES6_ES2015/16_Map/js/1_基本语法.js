/* 
	JavaScript 的对象（Object），
	本质上是键值对的集合（Hash 结构），
	但是传统上只能用字符串当作键
	这给它的使用带来了很大的限制

	为了解决这个问题，ES6 提供了 Map 数据结构。
	它类似于对象，也是键值对的集合，
	但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。
	也就是说，
	Object 结构提供了“字符串—值”的对应，
	Map 结构提供了“值—值”的对应，
	是一种更完善的 Hash 结构实现。

	如果需要“键值对”的数据结构，Map 比 Object 更合适。
 */
// 声明map实例化对象
const map = new Map([
	["userName", "张三"],
	["fun", () => console.log("this is fun")],
	[
		["string", "number", "boolean", "null", "undefined"],
		{
			a: 1,
			b: {
				c: true,
				d: NaN,
			},
		},
	],
	{
		name: "张三",
		age: 18,
	},
	[null, NaN],
]);

console.log(map, typeof map);
