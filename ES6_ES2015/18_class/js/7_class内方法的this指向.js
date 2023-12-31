/* 
	类的方法内部如果含有this，它默认指向类的实例。
	但是，一旦单独使用该方法，很可能报错

	class内的方法中的this，默认指向class类的实例。
	但是，如果将这个方法提取出来单独使用，
	this会指向该方法运行时所在的环境
	由于 class 内部是严格模式，
	所以 this 实际指向的是undefined，
	从而导致找不到print方法而报错。
 */
class Test1 {
	print1() {
		this.fun("这是Test1的函数执行");
	}
	fun = val => console.log(val);
}

const test1 = new Test1();

test1.print1(); //"这是Test1的函数执行"

const { print1 } = test1;

try {
	print1();
} catch (err) {
	console.error("this => undefined;", err);
}

/* 有三种解决方法 */
// 一个比较简单的解决方法是，在构造方法中绑定this
class Test2 {
	constructor() {
		this.print2 = this.print2.bind(this);
	}
	print2() {
		this.fun("这是Test2的函数执行");
	}
	fun = val => console.log(val);
}

const { print2 } = new Test2();

print2(); //这是Test2的函数执行

// 另一种解决方法是使用箭头函数
class Test3 {
	print3 = () => this.fun("这是Test3的函数执行");
	fun = val => console.log(val);
}

const { print3 } = new Test3();

print3(); //这是Test3的函数执行

// 还有一种解决方法是使用Proxy，获取方法的时候，自动绑定this
function selfish(target) {
	const cache = new WeakMap();
	const handler = {
		get(target, key) {
			const value = Reflect.get(target, key);
			if (typeof value !== "function") return value;
			if (!cache.has(value)) cache.set(value, value.bind(target));
			return cache.get(value);
		},
	};
	return new Proxy(target, handler);
}

class Test4 extends Test1 {
	print4() {
		this.fun("这是Test4的函数执行");
	}
}

const test4 = selfish(new Test4());

// console.log(test4);

const { print4 } = test4;

print4();
