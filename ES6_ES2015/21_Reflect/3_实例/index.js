/* 实例：使用 Proxy 实现观察者模式 */
/* 
	观察者模式（Observer mode）指的是函数自动观察数据对象，
	一旦对象有变化，函数就会自动执行

	使用 Proxy 写一个观察者模式的最简单实现，
	即实现 observable 和 observe 这两个函数。
	思路是 observable 函数返回一个原始对象的 Proxy 代理，
	拦截赋值操作，触发充当观察者的各个函数
*/
// 定义一个Set集合，所有观察者函数都放进这个集合
const queuedObservers = new Set();

// observe函数将观察者函数添加进set集合中
const observe = fn => queuedObservers.add(fn);

// observable函数返回原始对象的代理，拦截赋值操作
const observable = obj => new Proxy(obj, { set });

// 拦截函数set之中，会自动执行所有观察者
function set(target, key, value, receiver) {
	const result = Reflect.set(target, key, value, receiver);
	queuedObservers.forEach(observer => observer());
	return result;
}

// 数据对象person是观察目标
const person = observable({
	name: "张三",
	age: 20,
});

// 函数print是观察者
function print() {
	console.log(`${person.name}, ${person.age}`);
}

// 将print函数添加进set集合
observe(print);

// 一旦数据对象发生变化，print就会自动执行
person.name = "李四"; //李四, 20

person.age = 99; //李四, 99
