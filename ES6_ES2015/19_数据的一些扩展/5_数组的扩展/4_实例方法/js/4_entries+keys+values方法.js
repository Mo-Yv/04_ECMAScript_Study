/* 
	ES6 提供三个新的方法
	entries() keys() values()方法用于遍历数组。
	它们都返回一个遍历器对象，
	可以用for...of循环进行遍历

	区别是:
	keys()是对键名的遍历
	values()是对键值的遍历
	entries()是对键值对的遍历
 */
const arr = ["a", 0, [], {}];

// keys() 遍历键名
let result = arr.keys();
console.log(result); //Array Iterator

for (let i = 0; i <= arr.length; i++) {
	console.log(result.next());
}

// values() 遍历值
result = arr.values();
console.log(result); //Array Iterator

for (let i = 0; i <= arr.length; i++) {
	console.log(result.next());
}

// entries() 遍历键值对
result = arr.entries();
console.log(result); //Array Iterator

// for (let i = 0; i <= arr.length; i++) {
// 	console.log(result.next());
// }

for (const iterator of result) {
	console.log(iterator);
}
