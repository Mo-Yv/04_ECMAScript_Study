/* 
	ES6 提供了更接近传统语言的写法，引入了 Class（类）这个概念，作为对象的模板。
	通过class关键字，可以定义类

	class可以看作只是一个语法糖，它的绝大部分功能，ES5 都可以做到
	新的class写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已

	class完全可以看作构造函数的另一种写法
	但,class必须使用new调用，否则会报错
	这是它跟普通构造函数的一个主要区别
	普通构造函数不用new也可以执行

	class声明不可以提升
	重复声明一个class会引起类型错误
 */
/* ES5 start */
// 构造函数
// function Human(name, age) {
// 	this.name = name;
// 	this.age = age;
// }
// // 添加方法
// Human.prototype.printInfo = function () {
// 	console.log(`姓名:${this.name}, 年龄:${this.age}`);
// };
// // 初始化对象并调用方法
// const zs = new Human("张三", 18);
// zs.printInfo();

/* ES6 class */
class Person {
	// 构造方法,固定名字,不能改
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	// 自定义方法,不能使用ES5语法
	// 另外，方法与方法之间不需要逗号分隔，加了会报错
	// printInfo: function() {} //报错
	printInfo() {
		console.log(`姓名:${this.name}, 年龄:${this.age}`);
	}
	// 添加方法
	printThis() {
		console.log("普通函数this =>", this);
		// console.log(Object.keys(this));
	}
	// 箭头函数
	arrowThis = () => console.log("箭头函数this =>", this);
}

// 初始化对象
const ls = new Person("李四", 10);
// 调用方法
ls.printInfo();
ls.printThis();
ls.arrowThis();

// Person等效于
// Person.prototype = {
// 	constructor(name, age){...},
// 	printInfo(){...},
// 	printThis(){...}
// }

// class的数据类型就是函数，class本身就指向构造函数
// console.log(Person === Person.prototype.constructor, typeof Person); //true function

// 在class实例对象上面调用方法，其实就是调用原型上的方法
// console.log(ls.constructor === Person.prototype.constructor); //true

// 与 ES5 一样，类的所有实例共享一个原型对象
// console.log(new Person("张三",20).__proto__ === new Person("李四", 99).__proto__); //true

/* constructor() 方法 */
// constructor()方法是类的默认方法
// 通过new命令生成对象实例时，自动调用该方法
// 一个类必须有constructor()方法
// 如果没有显式定义，一个空的constructor()方法会被默认添加
// class Phone {}
// const hw = new Phone();
// console.log(hw);

// constructor()方法默认返回实例对象(this)
// 也可以指定返回另外一个对象
class Phone {
	constructor() {
		return new Person("张三", 99);
	}
}

const hw = new Phone();

console.log(hw);

hw.printThis();
