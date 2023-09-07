/* 
	get()
	get方法用于拦截某个属性的读取操作，可以接受三个参数，
	依次为目标对象、属性名和 proxy 实例本身（严格地说，是操作行为所针对的对象），
	其中最后一个参数可选
*/
// 如果访问目标对象不存在的属性，会返回一个提示。
// 如果没有这个拦截函数，访问不存在的属性，只会返回undefined
let obj = { num: 20 },
	handle = {
		get(target, propKey) {
			return propKey in target ? target[propKey] : `对象中不存在属性"${propKey}"`;
		},
	},
	proxy = new Proxy(obj, handle);

console.log(proxy.abcd); //对象中不存在属性"abcd"
console.log(proxy.num); //20

/* get方法可以继承 */
// 拦截操作定义在Prototype对象上面，
// 所以如果读取obj对象继承的属性时，拦截会生效
obj = Object.create(proxy);
console.log(obj.name); //对象中不存在属性"name"

/* 
	案例一
	使用get拦截，实现数组读取负数的索引
*/
const createArr = (...rest) => {
	let targetArr = rest;
	return new Proxy(targetArr, {
		get(target, propKey, receiver) {
			const index = Number(propKey);
			if (index < 0) propKey = String(target.length + index);
			return Reflect.get(target, propKey, receiver);
		},
	});
};

let arr = createArr(0, 2, 4, 6, 8);
console.log(arr); //Proxy(Array) {...}
console.log(arr[-1]); //8
console.log(arr[3]); //6

/* 
	案例二
	利用 Proxy，可以将读取属性的操作（get）
	转变为执行某个函数，从而实现属性的链式操作
*/
const pipe = value => {
	const funStack = [],
		proxy = new Proxy(
			{},
			{
				get(popeObj, funName) {
					if (funName === "get") return funStack.reduce((val, fun) => fun(val), value);
					funStack.push(window[funName]);
					return proxy;
				},
			}
		);
	return proxy;
};

var double = n => n * 2,
	pow = n => n * n,
	reverseInt = n => n.toString().split("").reverse().join("") || 0;

// 设置proxy后就可以实现链式调用
let result = pipe(3).double.pow.reverseInt.get;
console.log(result);

/* 
	案例三
	利用get拦截，实现一个生成各种 DOM 节点的通用函数dom
*/
const createDom = new Proxy(
	{},
	{
		get(target, property) {
			/**
			 * 创建并返回HTMl元素
			 * @param {Object} 通过createDom创建的HTML元素的属性,默认值是空对象
			 * @param {Data} 创建的HTML元素的子节点(可以是子元素也可以是文本节点)
			 * @return {DOM Object} 创建的HTML元素
			 */
			return function (attrs = {}, ...children) {
				// 创建元素
				const el = document.createElement(property);
				// 遍历获取属性对象中的所有可枚举的属性
				for (let prop of Object.keys(attrs)) {
					// 并添加给创建的元素
					el.setAttribute(prop, attrs[prop]);
				}
				// 遍历所有子节点
				for (let child of children) {
					// 如果是文本节点
					if (typeof child === "string") {
						// 创建文本节点
						child = document.createTextNode(child);
					}
					// 添加到元素里
					el.appendChild(child);
				}
				// 返回创建的元素
				return el;
			};
		},
	}
);

// 创建元素div
const dom = createDom.div(
	{
		// 配置属性
		class: "box",
		style: "margin: auto",
		contenteditable: true,
		// onclick: function click() {
		// 	alert(1111);
		// }
	},
	// 创建span
	createDom.span({ style: "margin-right: 10px" }, "Hello"),
	// 创建 a
	createDom.a({ href: "#" }, "World"),
	// 创建ul
	createDom.ul(
		// 设置id
		{ id: "list" },
		createDom.li(
			{
				style: `
					border-bottom:2px solid #aaa;
					text-align:center;
					font-size: 20px;
					font-weight: bold;
				`.trim(),
			},
			"阿巴阿巴"
		),
		createDom.li(
			{},
			createDom.input({
				type: "number",
				placeholder: "歪比巴卜",
				max: 10,
				min: 0,
				value: 0,
			})
		)
	)
);
// 添加元素
document.body.appendChild(dom);
console.log(dom);

/* 
	案例四
	get方法的第三个参数的例子，
	它总是指向原始的读操作所在的那个对象，
	一般情况下就是 Proxy 实例
*/
proxy = new Proxy(
	{},
	{
		get(target, key, receiver) {
			return receiver;
		},
	}
);
// proxy对象的getReceiver属性会被get()拦截，
// 得到的返回值就是proxy对象
console.log(proxy.getReceiver === proxy); // true

// 如果一个属性不可配置（configurable）且不可写（writable），
// 则 Proxy 不能修改该属性，否则通过 Proxy 对象访问该属性会报错
const target = Object.defineProperty({}, "count", {
	value: 114514,
	writable: false,
	configurable: false,
});

handle = {
	get(target, propKey) {
		return propKey;
	},
};

proxy = new Proxy(target, handle);

try {
	console.log(proxy.count);
} catch (error) {
	console.warn(error); //执行
}
