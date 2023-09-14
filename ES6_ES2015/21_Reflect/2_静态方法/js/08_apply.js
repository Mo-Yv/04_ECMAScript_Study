/* 
	Reflect.apply方法等同于Function.prototype.apply.call(func, thisArg, args)，
	用于绑定this对象后执行给定函数。

	一般来说，如果要绑定一个函数的this对象，
	可以这样写fn.apply(obj, args)，
	但是如果函数定义了自己的apply方法，
	就只能写成Function.prototype.apply.call(fn, obj, args)，
	采用Reflect对象可以简化这种操作
*/
const numArr = [11, 33, 12, 54, 18, 96];

// 旧写法
let youngest = Math.min.apply(Math, numArr),
	oldest = Math.max.apply(Math, numArr),
	type = Object.prototype.toString.call(youngest);

console.log(youngest, oldest, type);

// 新写法
youngest = Reflect.apply(Math.min, Math, numArr);
oldest = Reflect.apply(Math.max, Math, numArr);
type = Reflect.apply(Object.prototype.toString, youngest, []);

console.log(youngest, oldest, type);
