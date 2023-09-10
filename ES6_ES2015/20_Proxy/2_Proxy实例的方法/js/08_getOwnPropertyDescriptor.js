/* 
	getOwnPropertyDescriptor()方法拦截Object.getOwnPropertyDescriptor()，
	返回一个属性描述对象或者undefined
*/
let handler = {
	getOwnPropertyDescriptor(target, key) {
		if (key[0] === "_") {
			return;
		}
		return Object.getOwnPropertyDescriptor(target, key);
	}
},
target = { _foo: "bar", baz: "tar" },
proxy = new Proxy(target, handler),
result;

result = Object.getOwnPropertyDescriptor(proxy, "a");
console.log(result); //undefined

result = Object.getOwnPropertyDescriptor(proxy, "_foo");
console.log(result); //undefined

result = Object.getOwnPropertyDescriptor(proxy, "baz");
console.log(result);
// {value: 'tar', writable: true, enumerable: true, configurable: true}