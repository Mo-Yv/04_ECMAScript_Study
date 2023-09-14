/* 
	Reflect.defineProperty方法基本等同于Object.defineProperty用来为对象定义属性。
	(本人注: 听说，在未来(不清楚具体什么时候)，后者会被逐渐废除 2023/9/14)

	如果Reflect.defineProperty的第一个参数不是对象，就会抛出错误
*/
let obj = {};

Object.defineProperty(obj, "a", {
	value: 0,
	writable: false,
	enumerable: false,
	configurable: false,
});

console.log("a =", obj.a);

Reflect.defineProperty(obj, "b", {
	value: 1,
	writable: false,
	enumerable: false,
	configurable: false,
});

console.log("b =", obj.b);

/* 这个方法可以与Proxy.defineProperty配合使用 */
const proxy = new Proxy(obj, {
	defineProperty(target, prop, descriptor) {
		console.log(descriptor);
		return Reflect.defineProperty(target, prop, descriptor);
	},
});

// Proxy.defineProperty对属性赋值设置了拦截，
// 然后使用Reflect.defineProperty完成了赋值
proxy.c = 3;
// {c: 3, writable: true, enumerable: true, configurable: true}

console.log(proxy.c); //3
