/* 
	preventExtensions()方法拦截Object.preventExtensions()。该方法必须返回一个布尔值，否则会被自动转为布尔值。

	这个方法有一个限制，
	只有目标对象不可扩展时(即Object.isExtensible(proxy)为false)，
	proxy.preventExtensions才能返回true，否则会报错。
*/
let target = {},
	proxy = new Proxy(target, {
		preventExtensions(target) {
			return true;
		},
	});

try {
	let result = Object.preventExtensions(proxy);
	console.log(result);
} catch (err) {
	console.error(err); //报错
}

/* 为了防止出现这个问题，通常要在proxy.preventExtensions()方法里面，调用一次Object.preventExtensions() */
proxy = new Proxy(target, {
	preventExtensions(target) {
		console.log("called");
		Object.preventExtensions(target);
		return true;
	},
});

let result = Object.preventExtensions(proxy);
console.log(result); //"called" Proxy {}