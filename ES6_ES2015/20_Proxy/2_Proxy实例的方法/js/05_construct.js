/* 
	construct()方法用于拦截new命令,可以接受三个参数:
		target：目标对象
		args：构造函数的参数数组
		newTarget：创造实例对象时，new命令作用的构造函数

	construct()方法返回的必须是一个对象，否则会报错
	虽然typeof null的值为object,但也不能作为返回值,
	因为无法返回null时,无法创建新的实例

	由于construct()拦截的是构造函数，
	所以它的目标对象必须是函数，否则也会报错
*/
let Fun = function() {
	console.log("Fun");
},
handle = {
	construct(target, args, newTarget) {
		// 必须返回一个对象
		// return 1111; //new proxy() 报错
		return new target(...args);
	}
},
proxy = new Proxy(Fun, handle),
p = new proxy();

console.log("p instanceof Fun =>", p instanceof Fun); //true

// 目标对象必须是函数
proxy = new Proxy({}, handle);
// p = new proxy(); //报错

// construct()方法中的this指向的是handler，而不是实例对象
handle = {
	construct(target, args, newTarget) {
		console.log("this===handle =>", this === handle);
		return new target(...args);
	}
}

proxy = new Proxy(Fun, handle);

p = new proxy(); //true

// 拦截初始化class实例对象
class Func {
	constructor(name) {
		this.name = name;
	}
}

handle = {
	construct(target, args, newTarget) {
		console.warn("此类不允许new初始化");
		return {};
	}
}

proxy = new Proxy(Func, handle);

p = new proxy("111");

console.log(p);