/* 
	Reflect.getOwnPropertyDescriptor基本等同于Object.getOwnPropertyDescriptor，
	用于得到指定属性的描述对象
	(本人注: 听说，将来(不清楚具体什么时候)，后者会被逐渐替代掉 2023/9/14)

	Reflect.getOwnPropertyDescriptor和Object.getOwnPropertyDescriptor的一个区别是，
	如果第一个参数不是对象，
	Object.getOwnPropertyDescriptor(1, 'foo')不报错，返回undefined，
	Reflect.getOwnPropertyDescriptor(1, 'foo')会抛出错误，表示参数非法
*/
let obj = {};

Reflect.defineProperty(obj, "a", {
	value: "AAA",
	enumerable: false,
	writable: true,
	configurable: true,
});

// 旧写法
let theDescriptor = Object.getOwnPropertyDescriptor(obj, "a");
console.log(theDescriptor);
//{value: 'AAA', writable: true, enumerable: false, configurable: true}

// 新写法
theDescriptor = Reflect.getOwnPropertyDescriptor(obj, "a");
console.log(theDescriptor);
//{value: 'AAA', writable: true, enumerable: false, configurable: true}
