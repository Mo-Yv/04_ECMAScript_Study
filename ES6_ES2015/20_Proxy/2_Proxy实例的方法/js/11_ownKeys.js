/* 
	ownKeys()方法用来拦截对象自身属性的读取操作。
	具体来说，拦截以下操作:
		Object.getOwnPropertyNames()
		Object.getOwnPropertySymbols()
		Object.keys()
		for...in循环

	注意，使用Object.keys()方法时，
	有三类属性会被ownKeys()方法自动过滤，不会返回
		目标对象上不存在的属性
		属性名为 Symbol 值
		不可遍历（enumerable）的属性

	ownKeys()方法返回的数组成员，只能是字符串或Symbol值。
	如果有其他类型的值，或者返回的根本不是数组，就会报错
*/
let target = {
		a: 1,
		b: 2,
		c: 3,
	},
	handler = {
		ownKeys(target) {
			return ["d", "e"];
		},
	},
	proxy = new Proxy(target, handler),
	// 拦截Object.keys
	targetKeys = Object.keys(proxy);

console.log(targetKeys); //空数组

/* 拦截for in遍历 */
console.groupCollapsed("for in");
{
	// 因为handler.ownKeys只返回d和e
	// 但target没有属性d和e,所以for in没有输出
	for (const key in proxy) {
		console.log(key); //没有输出
	}
}
console.groupEnd();

/* 拦截读取第一个字符为"_"的属性名 */
target = {
	_a: "abc",
	_b: "bcd",
	b: "bcd",
};

handler = {
	ownKeys(target) {
		return Reflect.ownKeys(target).filter(key => key[0] !== "_");
	},
};

proxy = new Proxy(target, handler);

console.log(Object.keys(proxy)); //["b"]

/* ownKeys()方法自动过滤 */
target = {
	a: 1,
	b: 2,
	c: 3,
	[Symbol.for("d")]: "4",
};

Object.defineProperty(target, "e", {
	enumerable: false,
	value: 5,
});

handler = {
	ownKeys(target) {
		// 显式返回原有属性a,不存在的属性d、Symbol值Symbol.for('d')、不可遍历的属性e
		return ["a", "d", Symbol.for("d"), "e"];
	},
};

proxy = new Proxy(target, handler);

// 不存在的属性、Symbol、不可遍历的属性，都会被自动过滤掉
console.log(Object.keys(proxy)); //["a"]

/* 还可以拦截Object.getOwnPropertyNames() */
target = {};
proxy = new Proxy(target, {
	ownKeys(target) {
		return ["a", "b"];
	},
});

console.log(Object.getOwnPropertyNames(proxy)); //['a', 'b']

/* 如果目标对象自身包含不可配置的属性，则该属性必须被ownKeys()方法返回，否则报错 */
// var obj = {};
Object.defineProperty(target, "a", {
	configurable: false,
	enumerable: true,
	value: "aaa",
});

proxy = new Proxy(target, {
	ownKeys(target) {
		return ["b"];
	},
});

try {
	console.log(Object.getOwnPropertyNames(proxy));
} catch (error) {
	console.error(error); //打印报错消息
}

/* 
	另外，如果目标对象是不可扩展的（non-extensible），
	这时ownKeys()方法返回的数组之中必须包含原对象的所有属性，
	且不能包含多余的属性，否则报错
*/
target = { a: 1 };

Object.preventExtensions(target);

proxy = new Proxy(target, {
	ownKeys(target) {
		return ["a", "b"];
	},
});

// obj对象是不可扩展的，
// 这时ownKeys()方法返回的数组之中，
// 包含了obj对象的多余属性b，所以导致了报错
console.log(Object.getOwnPropertyNames(proxy));