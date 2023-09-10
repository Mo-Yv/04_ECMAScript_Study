/* 
	Proxy.revocable()方法返回一个可取消的 Proxy 实例

	Proxy.revocable()方法返回一个对象，
	该对象的proxy属性是Proxy实例，
	revoke属性是一个函数，
	可以取消Proxy实例。

	Proxy.revocable()的一个使用场景是，
	目标对象不允许直接访问，必须通过代理访问，
	一旦访问结束，就收回代理权，不允许再次访问
*/
let target = {},
	handler = {},
	{ proxy, revoke } = Proxy.revocable(target, handler);

proxy.foo = 123;
console.log(proxy.foo); //123

// 当执行revoke函数之后，再访问Proxy实例，就会抛出一个错误。
revoke();
try {
	console.log(proxy.foo);
} catch (err) {
	console.error(err); //报错
}
