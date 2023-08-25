/* 
	与 ES5 一样，
	在“类”的内部可以使用get和set关键字，
	对某个属性设置存值函数和取值函数，
	拦截该属性的存取行为
 */
class Human {
	constructor(name = "王五", age = 18) {
		this._name = name;
		this._age = age;
	}
	// name被访问时,get会被调用
	get name() {
		// 要获取值,不能使用this.name,会报错
		return "访问name,调用get,name = " + this._name;
	}
	// 当name被修改或初始化构造函数对象时,set会被调用
	// 只接收一个参数,是name被修改后的值
	set name(val) {
		console.log("name被修改,调用set,修改后的值为:", val);
		// 修改对象的值
		this._name = val;
	}
	get age() {
		return "age被访问,age = " + this._age;
	}
	set age(val) {
		console.log("age被修改,修改后的值为:", val);
		this._age = val;
	}
}

const zs = new Human("李四", 90);

console.log(zs);

// zs.name = "张三";
console.log("zs.name:", zs.name);

// zs.age = 111;
// console.log("zs.age:", zs.age);

class Person extends Human {
	constructor(name, age) {
		super(name, age);
	}
}

// const zmy = new Person("ZMY", 1999);
// // get和set都是可以被继承的
// zmy.name = "zmy";
// zmy.age = 2002;
// console.log("zs.name:", zmy.name);
// console.log("zs.age:", zmy.age);
