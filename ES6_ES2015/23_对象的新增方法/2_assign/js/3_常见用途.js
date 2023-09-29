/* 1.为对象添加属性 */
// 通过Object.assign()方法，将x属性和y属性添加到Point类的对象实例
class Obj {
	constructor(x, y) {
		const obj = { x, y };
		Object.assign(this, obj);
	}
}
// let obj = new Obj(1, 2);
// console.log(obj);

/* 2.为对象添加方法 */
Object.assign(obj.__proto__, {
	methodsOne(...args) {},
	methodsTwo() {},
});

// 等同于下面的写法
obj.__proto__.methodsOne = function (...args) {};
obj.__proto__.methodsTwo = function () {};

/* 3.克隆对象 */
// 将原始对象拷贝到一个空对象，就得到了原始对象的克隆
// 但这种方法只能克隆原始对象自身的值，不能克隆它继承的值
function clone(origin) {
	return Object.assign({}, origin);
}

// 保持继承链
function clone(origin) {
	let originProto = Object.getPrototypeOf(origin);
	return Object.assign(Object.create(originProto), origin);
}

/* 4.合并多个对象 */
// 将多个对象合并到某个对象
let merge = (target, ...sources) => Object.assign(target, ...sources);

// 合并后返回一个新对象
merge = (...sources) => Object.assign({}, ...sources);
