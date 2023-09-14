/* 
	Reflect对象与Proxy对象一样，
	也是 ES6 为了操作对象而提供的新 API

	Reflect 对象的设计目的有这样几个:
		1.将Object对象的一些明显属于语言内部的方法（比如Object.defineProperty），放到Reflect对象上。
		  现阶段，某些方法同时在Object和Reflect对象上部署，未来的新方法将只部署在Reflect对象上。
		  也就是说，从Reflect对象上可以拿到语言内部的方法。

		2.修改某些Object方法的返回结果，让其变得更合理。
		  比如，Object.defineProperty(obj, name, desc)在无法定义属性时，会抛出一个错误，
		  而Reflect.defineProperty(obj, name, desc)则会返回false
		
		3.让Object操作都变成函数行为。
		  某些Object操作是命令式，比如name in obj和delete obj[name]，
		  而Reflect.has(obj, name)和Reflect.deleteProperty(obj, name)让它们变成了函数行为

		4.Reflect对象的方法与Proxy对象的方法一一对应，只要是Proxy对象的方法，就能在Reflect对象上找到对应的方法。
		  这就让Proxy对象可以方便地调用对应的Reflect方法，完成默认行为，作为修改行为的基础。
		  也就是说，不管Proxy怎么修改默认行为，你总可以在Reflect上获取默认行为
*/
let obj = {};

// 添加属性a,且不可修改
Object.defineProperty(obj, "a", {
	value: 0,
	enumerable: false,
});

/* 针对第2点的案例 */
// 旧写法
try {
	Object.defineProperty(obj, "a", { value: 1 });
} catch (err) {
	console.error(err);
}

// Reflect
let isTrue = Reflect.defineProperty(obj, "a", { value: 2 });
console.log(isTrue);
if (isTrue) {
	console.log(obj.a);
} else {
	console.error("obj.a不可修改");
}

/* 针对第三点的案例 */
// 旧写法 命令
isTrue = "a" in obj;
console.log(isTrue); //true

// Reflect 调用函数
isTrue = Reflect.has(obj, "a");
console.log(isTrue); //true

/* 针对第四点的案例一 */
// Proxy方法拦截target对象的属性赋值行为。
// 使用Reflect.set方法将值赋值给对象的属性，确保完成原有的行为，然后再部署额外的功能
obj = { a: 0 };

let proxy = new Proxy(obj, {
	set(target, name, value, receiver) {
		const success = Reflect.set(target, name, value, receiver);
		if (success) console.log(`将属性${name}的值修改为${value}`);
		return success;
	},
});

proxy.a = 111;
console.log(proxy.a);

/* 针对第四点的案例二 */
// 每一个Proxy对象的拦截操作（get、delete、has），内部都调用对应的Reflect方法，保证原生行为能够正常执行。
// 添加的工作，就是将每一个操作输出一行日志
obj = { a: 10 };

proxy = new Proxy(obj, {
	get(target, name) {
		console.log(`读取属性 ${name} 的值`);
		return Reflect.get(target, name);
	},
	deleteProperty(target, name) {
		console.log(`删除属性 ${name}`);
		return Reflect.deleteProperty(target, name);
	},
	has(target, name) {
		console.log(`判断是否拥有属性 ${name}`);
		return Reflect.has(target, name);
	},
});

// 访问
console.log(proxy.a);
// 删除
delete proxy.a;
// 判断是否拥有属性
console.log("a" in proxy);
