/* 父类 */
class Human {
	constructor(name, age) {
		this.name = name;
		this.age = age;
		console.log();
	}
	print() {
		console.log(`姓名:${this.name}, 年龄:${this.age}`);
	}
	printThis() {
		console.log("this =>", this);
	}
	static fun() {
		console.log("这是Human中的静态方法");
	}
	static info = "这是Human中的静态属性";
	msg = "This is a msg";
}

// Human.fun();
// console.log(Human.info);

/* 子类 */
class Person extends Human {
	constructor(name, age, sex, address) {
		// 调用父类的构造方法
		// 相当于 Person.call(this,name,age)
		super(name, age);
		// 新属性
		this.sex = sex;
		this.address = address;
	}
	print() {
		console.log(`姓名: ${this.name}, 年龄: ${this.age}, 性别: ${this.sex}, 籍贯: ${this.address}`);
	}
}

const zs = new Person("张三", 20, "男", "北京市朝阳区");

zs.print();

/* 继承父类的方法 */
zs.printThis();
// 静态方法可以继承
Person.fun();

/* 父类的方法属性 */
// 静态属性,不能继承
console.log(zs.info); //undefined
// 普通属性
console.log(zs.msg);
