/* 
	set方法用来拦截某个属性的赋值操作，可以接受四个参数:
	依次为目标对象、属性名、属性值和 Proxy 实例本身，
	其中最后一个参数可选。

	假定Person对象有一个age属性，
	该属性应该是一个不大于 150 的整数，
	那么可以使用Proxy保证age的属性值符合要求
*/
let handle = {
	set(obj, prop, value) {
		if (prop === "age") {
			if (!Number.isInteger(value)) {
				return console.warn("请输入正整数");
			} else if (value >= 150 || value <= 0) {
				return console.warn(`${value}是无效数据`);
			}
		}
		// 对于满足条件的 age 属性以及其他属性，直接保存
		obj[prop] = value;
		return true;
	},
};

let proxy = new Proxy({}, handle);

proxy.age = 15;
console.log(proxy.age); //15

proxy.age = 150; //无效数据
proxy.age = -10; //无效数据
proxy.age = 10.5; //请输入正整数
proxy.age = "100"; //请输入正整数
console.log(proxy.age); //15


/* 
	有时会在对象上面设置内部属性，
	属性名的第一个字符使用下划线开头，
	表示这些属性不应该被外部使用。
	结合get和set方法，就可以做到防止这些内部属性被外部读写
*/
let obj = { _name: "张三", age: 20 };

handle = {
	get(target, key) {
		if(key[0] === "_") return console.warn(`${key}是私有属性,禁止外部读取`);
		return target[key];
	},
	set(target, key, value) {
		if(key[0] === "_") return console.warn(`${key}是私有属性,禁止外部修改`);
		target[key] = value;
		return true;
	}
}

proxy = new Proxy(obj, handle);

proxy._name = "李四"; //_name是私有属性,禁止外部修改
console.log(proxy._name); //_name是私有属性,禁止外部读取 undefined

proxy.age = 999;
console.log(proxy.age); // 999