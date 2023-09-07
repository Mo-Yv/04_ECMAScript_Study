/* 
	apply方法拦截函数的调用、call和apply操作
*/
/* 
	apply方法可以接受三个参数，分别是:
	目标对象
	目标对象的上下文对象（this）
	目标对象的参数数组
*/
// const handle = {
// 	apply(target, context, args) {
// 		return Reflect.apply(...arguments);
// 	}
// }

let fun = function() { return ["fun1"] },
handle = {
	apply() { return "proxy.handle" }
},
proxy = new Proxy(fun, handle);

// 当Proxy实例作为函数调用时，就会被apply方法拦截，返回一个字符串
console.log(proxy()); //proxy.handle

fun = function(a, b) { return a + b };
handle = {
	apply(target, context, args) {
		return Reflect.apply(...arguments) * 10;
	}
}
proxy = new Proxy(fun, handle);

// 每当执行proxy函数（直接调用或call和apply调用），就会被apply方法拦截
console.log(proxy(1, 5)); //60
console.log(proxy.call(null, 1, 5)); //60
console.log(proxy.apply(null, [1, 5])); //60

// 直接调用Reflect.apply方法，也会被拦截
let a = Reflect.apply(proxy, null, [1, 5]);
console.log(a); //60