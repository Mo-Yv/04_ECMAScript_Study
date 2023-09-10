/* 
	isExtensible()方法拦截Object.isExtensible()操作

	注意，该方法只能返回布尔值，否则返回值会被自动转为布尔值

	这个方法有一个强限制，它的返回值必须与目标对象的isExtensible属性保持一致，否则就会抛出错误
*/
let proxy = new Proxy({}, {
	isExtensible(target) {
		console.log("isExtensible running");
		return true;
		// return 1;
		// return false; //p报错
	}
});

let p = Object.isExtensible(proxy);
console.log(p); //true