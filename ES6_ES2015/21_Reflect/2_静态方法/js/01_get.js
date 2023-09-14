/* 
	Reflect.get(target, name, receiver)
	此方法查找并返回target对象的name属性，
	如果没有该属性，则返回undefined

	如果第一个参数不是对象，Reflect.get方法会报错
*/
let obj = {
	a: 1,
	get sum() {
		console.log("this =>", this);
		return this.a * 10;
	},
},
result;

result = Reflect.get(obj, "a");;
console.log(result); //1

result = Reflect.get(obj, "sum");
console.log(result); //10

// 如果name属性部署了读取函数（getter），则读取函数的this绑定receiver
let newObj = { a: 2 };

result = Reflect.get(obj, "sum", newObj);
console.log(result); //20