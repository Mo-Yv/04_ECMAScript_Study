/* 
	getPrototypeOf()方法主要用来拦截获取对象原型
	具体来说，拦截下面这些操作:
		Object.prototype.__proto__
		Object.prototype.isPrototypeOf()
		Object.getPrototypeOf()
		Reflect.getPrototypeOf()
		instanceof

	注意，getPrototypeOf()方法的返回值必须是对象或者null，否则报错。

	另外，如果目标对象不可扩展（non-extensible）， 
	getPrototypeOf()方法必须返回目标对象的原型对象。
*/
let proto = {},
proxy = new Proxy({}, {
	getPrototypeOf(target) {
		return proto;
	},
});

console.log(Object.getPrototypeOf(proxy) === proto); //true

