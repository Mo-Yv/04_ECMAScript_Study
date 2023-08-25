/* 
	ES6 原生提供 Proxy 构造函数，用来生成 Proxy 实例 

	语法:
	const proxy = new Proxy(target, handle);

	Proxy 对象的所有用法，都是上面这种形式，不同的只是handler参数的写法。
	Proxy接收两个参数:
	target: 表示所要拦截的目标对象，
	handler: 也是一个对象，用来定制拦截行为

	如果handler没有设置任何拦截，那就等同于直接通向原对象

	Proxy 用于修改某些操作的默认行为，
	等同于在语言层面做出修改，
	所以属于一种"元编程"(meta programming)，
	即对编程语言进行编程。

	Proxy 可以理解成，在目标对象之前架设一层"拦截"，
	外界对该对象的访问都必须先通过这层拦截，
	因此提供了一种机制，可以对外界的访问进行过滤和改写。
	Proxy 这个词的原意是代理，
	用在这里表示由它来"代理"某些操作，以译为"代理器"。

	注意，要使得Proxy起作用，
	必须针对Proxy实例进行操作，
	而不是针对目标对象进行操作

	Proxy 支持的拦截操作一览，一共 13 种:
		get(target, propKey, receiver)：
			拦截对象属性的读取，
			比如 proxy.foo 和 proxy['foo']。
		set(target, propKey, value, receiver)：
			拦截对象属性的设置，
			比如 proxy.foo = v 或 proxy['foo'] = v，
			返回一个布尔值。
		has(target, propKey)：
			拦截 propKey in proxy 的操作，
			返回一个布尔值。
		deleteProperty(target, propKey)：
			拦截 delete proxy[propKey] 的操作，
			返回一个布尔值。
		ownKeys(target)：
			拦截 Object.getOwnPropertyNames(proxy)、Object.getOwnPropertySymbols(proxy)、Object.keys(proxy)、for...in循环，
			返回一个数组。
			该方法返回目标对象所有自身的属性的属性名，
			而 Object.keys() 的返回结果仅包括目标对象自身的可遍历属性。
		getOwnPropertyDescriptor(target, propKey)：
			拦截 Object.getOwnPropertyDescriptor(proxy, propKey)，
			返回属性的描述对象。
		defineProperty(target, propKey, propDesc)：
			拦截 Object.defineProperty(proxy, propKey, propDesc）、Object.defineProperties(proxy, propDescs)，
			返回一个布尔值。
		preventExtensions(target)：
			拦截 Object.preventExtensions(proxy)，
			返回一个布尔值。
		getPrototypeOf(target)：
			拦截 Object.getPrototypeOf(proxy)，
			返回一个对象。
		isExtensible(target)：
			拦截 Object.isExtensible(proxy)，
			返回一个布尔值。
		setPrototypeOf(target, proto)：
			拦截 Object.setPrototypeOf(proxy, proto)，
			返回一个布尔值。
			如果目标对象是函数，那么还有两种额外操作可以拦截。
		apply(target, object, args)：
			拦截 Proxy 实例作为函数调用的操作，
			比如 proxy(...args)、proxy.call(object, ...args)、proxy.apply(...)。
		construct(target, args)：
			拦截 Proxy 实例作为构造函数调用的操作，
			比如 new proxy(...args)
 */
/* 
	对一个空对象架设了一层拦截，重定义了属性的读取（get）和设置（set）行为
	对设置了拦截行为的对象obj，去读写它的属性
*/
let obj = { num: 0 },
	handle = {
		get(target, propKey, receiver) {
			console.log(`getting => ${propKey}`);
			return Reflect.get(target, propKey, receiver);
		},
		set(target, propKey, value, receiver) {
			console.log(`setting => ${propKey}`);
			return Reflect.set(target, propKey, value, receiver);
		},
	},
	proxy = new Proxy(obj, handle);

// console.log(proxy);

// console.log(proxy.num++);

// 拦截对属性的访问和修改
handle = {
	get(target, propKey) {
		return "拦截属性访问";
	},
	set(target, propKey, value) {
		console.log("拦截修改属性");
		return false;
	},
};

proxy = new Proxy(obj, handle);

proxy.num = 114514; //拦截修改属性
console.log(proxy.num); //拦截属性访问

// 直接操作原对象是不会有阻拦的
console.log("num =", obj.num); //0

/* 
	一个技巧是将 Proxy 对象，设置到object.proxy属性，
	从而可以在object对象上调用 
*/
obj = {
	num: 0,
	proxy: new Proxy(obj, handle),
};

obj.proxy.num++; //拦截修改属性
console.log(obj.proxy.num); //拦截属性访问

// 直接操作原对象,没有阻拦
console.log(obj.num); //0

/* Proxy 实例也可以作为其他对象的原型对象 */
proxy = new Proxy({}, handle);

// proxy对象是obj对象的原型，obj对象本身并没有num属性，
// 所以根据原型链，会在proxy对象上读取该属性，导致被拦截
obj = Object.create(proxy);

obj.num = 0; //拦截修改属性
console.log(obj.num); //拦截属性访问
