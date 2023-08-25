function Human(name, age) {
	this.name = name;
	this.age = age;
}

Human.prototype.print = function () {
	console.log(`姓名:${this.name}, 年龄:${this.age}`);
};

Human.prototype.printThis = function () {
	console.log("this =>", this);
};

const zs = new Human("张三", 50);
zs.print();
zs.printThis();

function Person(name, age, sex, birthday) {
	// 重复参数
	// Human.call(this, name, age);
	Human.apply(this, [name, age]);
	// 新参数
	this.sex = sex;
	this.birthday = birthday;
}
// 设置构造函数的原型
Person.prototype = new Human();

// 可有可无
// Person.prototype.constructor = Person;

Person.prototype.print = function () {
	console.log(`姓名:${this.name}, 年龄:${this.age}, 性别:${this.sex}, 出生日期:${this.birthday}`);
};

const ls = new Person("李四", 99, "女", "2000/01/01");
ls.print();

// Person实例化对象继承human的原型方法
ls.printThis();
