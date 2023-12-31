/* 
	类相当于实例的原型，所有在类中定义的方法，都会被实例继承
	如果在一个方法前，加上static关键字
	就表示该方法不会被实例继承，而是直接通过类来调用
	这就称为“静态方法”

	父类的静态方法，可以被子类继承

	静态属性指的是 Class 本身的属性，即Class.propName，而不是定义在实例对象（this）上的属性

	ES6 明确规定，Class 内部只有静态方法，没有静态属性。
	现在有一个提案提供了类的静态属性，
	写法是在实例属性的前面，加上static关键字
 */
/* ES5 */
function Person() {}
const zs = new Person();

// 给对象添加静态成员
Person.msg = "李四";
Person.fun = () => console.log("这是fun");

// 向原型上添加属性
Person.prototype.info = "This is info";
Person.prototype.print = function () {
	console.log("this =>", this);
};

// 获取对象的属性
console.log("Person.msg =", Person.msg); //李四

Person.fun(); //这是fun

console.log("zs.msg =", zs.msg); //undefined

// zs.fun(); //报错

// 获取原型上的属性
console.log("Person.info =", Person.info); //undefined
console.log("zs.info =", zs.info); //This is info

zs.print(); //Person对象

/* ES6 */
class Human {
	constructor() {
		// 普通属性
		console.log(Human.info); //undefined
		// Human.fun(); //报错
		// 获取静态成员
		console.log("Human.msg =", Human.msg); //王五
		Human.print();
	}
	info = "This is info";
	fun = () => console.log("Function is ran");
	// 使用static关键字声明静态成员
	static msg = "王五";
	static print() {
		console.log("this =>", this.name);
	}
}
const human = new Human();

// 添加静态属性
Human.msg = "This is a message";
console.log(Human.msg);
