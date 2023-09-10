/* 
	setPrototypeOf()方法主要用来拦截Object.setPrototypeOf()方法 

	注意，该方法只能返回布尔值，否则会被自动转为布尔值。
	另外，如果目标对象不可扩展（non-extensible），
	setPrototypeOf()方法不得改变目标对象的原型
*/
let handler = {
		setPrototypeOf(target, proto) {
			throw new Error("禁止修改原型对象");
		},
	},
	proto = {},
	target = function () {},
	proxy = new Proxy(target, handler);

// 只要修改target的原型对象，就会报错
try {
	Object.setPrototypeOf(proxy, proto);
} catch (err) {
	console.error(err); //报错
}

