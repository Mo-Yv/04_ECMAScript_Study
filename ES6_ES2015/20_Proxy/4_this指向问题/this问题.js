/* 
	虽然 Proxy 可以代理针对目标对象的访问，但它不是目标对象的透明代理，
	即不做任何拦截的情况下，也无法保证与目标对象的行为一致。
	主要原因就是在 Proxy 代理的情况下，目标对象内部的this关键字会指向 Proxy 代理。
*/
let target = {
		m() {
			console.log(this === proxy);
		},
	},
	handler = {},
	proxy = new Proxy(target, handler);

// 一旦proxy代理target，target.m()内部的this就是指向proxy，而不是target。
// 所以，虽然proxy没有做任何拦截，target.m()和proxy.m()返回不一样的结果。
target.m(); // false
proxy.m(); // true

/* 由于this指向的变化，导致 Proxy 无法代理目标对象。 */
let _name = new WeakMap();

class Person {
	constructor(name) {
		_name.set(this, name);
	}
	get name() {
		return _name.get(this);
	}
}

const jane = new Person("Jane");
console.log(jane.name); // 'Jane'

// 目标对象jane的name属性，实际保存在外部WeakMap对象_name上面，通过this键区分。
// 由于通过proxy.name访问时，this指向proxy，导致无法取到值，所以返回undefined。
proxy = new Proxy(jane, {});
console.log(proxy.name); // undefined

/* 
	此外，有些原生对象的内部属性，只有通过正确的this才能拿到，
	所以 Proxy 也无法代理这些原生对象的属性。
*/
target = new Date();
handler = {};
proxy = new Proxy(target, handler);

// getDate()方法只能在Date对象实例上面拿到，
// 如果this不是Date对象实例就会报错。
try {
	proxy.getDate();
} catch (err) {
	console.error(err); //报错
}

// 这时，this绑定原始对象，就可以解决上述问题。
target = new Date("2015-01-01");

handler = {
	get(target, prop) {
		if (prop === "getDate") return target.getDate.bind(target);
		return Reflect.get(target, prop);
	},
};

proxy = new Proxy(target, handler);

console.log(proxy.getDate()); // 1

// 另外，Proxy 拦截函数内部的this，指向的是handler对象。
handler = {
	get(target, key, receiver) {
		console.log(this === handler);
		return "Hello, " + key;
	},
	set(target, key, value) {
		console.log(this === handler);
		target[key] = value;
		return true;
	},
};

proxy = new Proxy({}, handler);

proxy.foo = 1; //true
console.log(proxy.foo); //true // Hello, foo
