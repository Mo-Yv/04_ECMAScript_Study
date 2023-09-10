/* 
	has()方法用来拦截HasProperty操作，
	即判断对象是否具有某个属性时，这个方法会生效。
	典型的操作就是in运算符。
	has()方法可以接受两个参数:
		目标对象
		需查询的属性名
*/
// 使用has()方法隐藏某些属性，不被in运算符发现
let obj = {
	_name: "张三",
	name: "李四"
},
handle = {
	has(target, key) {
		if(key[0] === "_") return false;
		return key in target;
	}
},
proxy = new Proxy(obj, handle);

console.log("'_name' in obj =>", "_name" in obj); //true
console.log("'_name' in proxy =>", "_name" in proxy); //false

// 虽然for...in循环也用到了in运算符，
// 但是has()拦截对for...in循环不生效
console.group("for in proxy");
	for (const key in proxy) {
		console.log(key); //_name name
	}
console.groupEnd();