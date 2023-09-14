/* 
	Reflect.set(target, name, value, receiver)
	如果第一个参数不是对象，会报错

	Reflect.set方法设置target对象的name属性等于value
*/
let obj = {
	a: 1,
	set setFun(value) {
		console.log("this =>", this);
		return (this.a = value * 10);
	},
};

console.log("obj.a =", obj.a); // 1

Reflect.set(obj, "a", 2);
console.log("obj.a =", obj.a); // 2

Reflect.set(obj, "setFun", 3);
console.log("obj.a =", obj.a); // 30

/* 如果name属性设置了赋值函数，则赋值函数的this绑定receiver */
let newObj = { a: 20, b: 30 };

Reflect.set(obj, "a", 99, newObj);
console.log("obj.a =", obj.a); //30
console.log("newObj.a =", newObj.a); //99

Reflect.set(obj, "setFun", 99, newObj);
console.log("obj.a =", obj.a); //30
console.log("newObj.a =", newObj.a); //990

/* 
	注意，如果 Proxy对象和 Reflect对象联合使用，
	前者拦截赋值操作，后者完成赋值的默认行为，而且传入了receiver，
	那么Reflect.set会触发Proxy.defineProperty拦截
*/
obj = { a: "a" };

let handler = {
		set(target, key, value, receiver) {
			console.log("set");
			Reflect.set(target, key, value, receiver);
		},
		defineProperty(target, key, attribute) {
			console.log("defineProperty");
			Reflect.defineProperty(target, key, attribute);
		},
	},
	proxy = new Proxy(obj, handler);

/* 
	Proxy.set拦截里面使用了Reflect.set，
	而且传入了receiver，导致触发Proxy.defineProperty拦截。
	这是因为Proxy.set的receiver参数总是指向当前的 Proxy实例，
	而Reflect.set一旦传入receiver，就会将属性赋值到receiver上面，导致触发defineProperty拦截
*/
proxy.a = "A"; //set //defineProperty

/* 如果Reflect.set没有传入receiver，那么就不会触发defineProperty拦截 */
obj = { a: "a" };

handler = {
	set(target, key, value, receiver) {
		console.log("set");
		Reflect.set(target, key, value);
	},
	defineProperty(target, key, attribute) {
		console.log("defineProperty");
		Reflect.defineProperty(target, key, attribute);
	},
};

proxy = new Proxy(obj, handler);

proxy.a = "A"; //set
