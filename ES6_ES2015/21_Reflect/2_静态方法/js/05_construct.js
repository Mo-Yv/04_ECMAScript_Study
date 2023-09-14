/* 
	Reflect.construct方法等同于new target(...args)，
	这提供了一种不使用new，来调用构造函数的方法

	如果Reflect.construct()方法的第一个参数不是函数，会报错
*/
function Greeting(name) {
	this.name = name;
}

// new 的写法
let instance = new Greeting("张三");
console.log(instance, instance instanceof Greeting);

// Reflect.construct 的写法
instance = Reflect.construct(Greeting, ["张三"]);
console.log(instance, instance instanceof Greeting);
