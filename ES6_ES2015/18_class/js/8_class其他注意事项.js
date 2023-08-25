/* 
	1.实例属性的新写法 
	ES2022 为类的实例属性，又规定了一种新写法。
	实例属性现在除了可以定义在constructor()方法里面的this上面，
	也可以定义在类内部的最顶层

	这种新写法的好处是，
	所有实例对象自身的属性都定义在类的头部，
	看上去比较整齐，一眼就能看出这个类有哪些实例属性

	注意，新写法定义的属性是实例对象自身的属性，
	而不是定义在实例对象的原型上面
*/
class Population {
	// 实例属性_total与取值函数total()和increment()方法，处于同一个层级。
	// 这时，不需要在实例属性前面加上this
	_total = 14 + "亿";
	constructor(country = "China") {
		// 原来的写法
		this._country = country;
	}
	get country() {
		console.log("访问country");
		return this._country;
	}
	set country(val) {
		console.log("修改country:", val);
		this._country = val;
	}
	get total() {
		console.log("访问total");
		return this._total;
	}
	set total(val) {
		console.log("修改total:", val);
		this._total = val;
	}
}
const china = new Population("中国");
console.log(china);

/* 
	2.属性表达式
	类的属性名，可以采用表达式
*/
const methodsName = "print";
class Human {
	[methodsName]() {
		console.log("this =>", this);
	}
}
const zs = new Human();
zs.print();

/* 
	3. Class 表达式
	与函数一样，类也可以使用表达式的形式定义
*/
// const Person = class {
// 	[methodsName]() {
// 		console.log("name =>", this.name);
// 	}
// };

// First只在Class的内部可用，指代当前类。
// 在Class外部，这个类只能用Person引用
const Person = class First {
	[methodsName]() {
		console.log("First.name =>", First.name);
	}
};

// const zmy = new First(); //报错

const ls = new Person();
ls.print();

/* 4.严格模式 */
// 类和模块的内部，默认就是严格模式，
// 所以不需要使用use strict指定运行模式。
// 只要你的代码写在类或模块之中，就只有严格模式可用。
// 考虑到未来所有的代码，其实都是运行在模块之中，
// 所以 ES6 实际上把整个语言升级到了严格模式

/* 
	5.不存在提升 
	类不存在变量提升（hoist），这一点与 ES5 完全不同
*/
// const test1 = new Test1(); //报错
// class Test2 extends Test1 {} //报错
class Test1 {}

/* 
	6.name属性
	由于本质上，ES6 的类只是 ES5 的构造函数的一层包装，
	所以函数的许多特性都被Class继承，包括name属性
*/
console.log("Test.name =", Test1.name); //Test

/* 
	7.生成器方法 
	如果某个方法之前加上星号（*），
	就表示该方法是一个 Generator 函数
*/
class Test3 {
	_arr = ["CSS", "HTML", "JS", "Vue", "Node"];
	*[Symbol.iterator]() {
		for (const i of this._arr) {
			yield "=> " + i;
		}
	}
}
const TestArr = new Test3();
for (const iterator of TestArr) {
	console.log(iterator);
}

/* 
	8.new.target属性
	new是从构造函数生成实例对象的命令
	ES6 为new命令引入了一个new.target属性，
	该属性一般用在构造函数之中，
	返回new命令作用于的那个构造函数。
	如果构造函数不是通过new命令或Reflect.construct()调用的，
	new.target会返回undefined，
	因此这个属性可以用来确定构造函数是怎么调用的
*/
// ES5
// function Test4(name) {
// 	if (new.target === Test4) {
// 		this.name = name;
// 	} else {
// 		throw new Error("通过new关键字声明实例对象");
// 	}
// }
// // const test4 = Test4("张三");
// const test4 = new Test4("张三");
// console.log(test4);

// Class 内部调用new.target，返回当前 Class
class Test4 {
	constructor() {
		console.log("new.target.name:", new.target.name);
		console.log("new.target===Test4:", new.target === Test4);
	}
}
new Test4();

// 子类继承父类时，new.target会返回子类
class Test5 extends Test4 {
	constructor() {
		super();
		console.log("new.target===Test5:", new.target === Test5);
	}
}
new Test5();

// 利用这个特点，可以写出不能独立使用、必须继承后才能使用的类
class Phone {
	constructor() {
		if (new.target === Phone) throw new Error("本类不能实例化");
	}
}

// const phone = new Phone(); //报错

class SmartPhone extends Phone {
	constructor(brand) {
		super();
		this.brand = brand;
	}
}

const hw = new SmartPhone("华为");
console.log(hw);
