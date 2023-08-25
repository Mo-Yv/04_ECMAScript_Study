/* 
	this关键字总是指向函数所在的当前对象，
	ES6 又新增了另一个类似的关键字super，
	指向当前对象的原型对象

	注意:
	super关键字表示原型对象时，
	只能用在对象的方法之中，
	用在其他地方都会报错

	目前，只有对象方法的简写法可以让JS引擎确认，
	定义的是对象的方法
 */
const father = { str: "father" },
	child = {
		str: "child",
		print() {
			console.log(super.str);
		},
	};

child.print(); //undefined
Object.setPrototypeOf(child, father);
child.print(); //father

let obj = {
	/* super用在属性里面 */
	// a: super.b, //报错

	/* super用在一个函数里面，然后赋值给foo属性 */
	// fun: () => super.b, //报错

	/* 和第二种一样 */
	// fun: function() {
	// 	return super.b; //报错
	// }
	
	fun() {
		return super.b;
	},
};

/* 
	JS 引擎内部，super.xxx 等同于
	Object.getPrototypeOf(this).xxx（属性）或
	Object.getPrototypeOf(this).xxx.call(this)（方法）
*/
const proto = {
	x: "hello",
	foo() {
		console.log(this.x);
	},
};

obj = {
	x: "world",
	foo() {
		super.foo();
	},
};

Object.setPrototypeOf(obj, proto);

// super.foo指向原型对象proto的foo方法，
// 但是绑定的this却还是当前对象obj，
// 因此输出的就是world
obj.foo(); // "world"
