/* 
	defineProperty()方法拦截了Object.defineProperty()操作

	注意，如果目标对象不可扩展（non-extensible），
	则defineProperty()不能增加目标对象上不存在的属性，否则会报错。
	另外，如果目标对象的某个属性不可写（writable）或不可配置（configurable），
	则defineProperty()方法不得改变这两个设置
*/
let handler = {
	// defineProperty()方法内部没有任何操作，只返回false，导致添加新属性总是无效
	// 这里的false只是用来提示操作失败，本身并不能阻止添加新属性
	defineProperty(target, key, descriptor) {
		return false;
	}
},
target = {},
proxy = new Proxy(target, handler);

proxy.foo = "bar";
console.log(proxy.foo); //undefined
