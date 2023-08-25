/* 			
	对于普通的对象，for...of结构不能直接使用，会报错，必须部署了 Iterator 接口后才能使用。
	但是，这样情况下，for...in循环依然可以用来遍历键名。
	一种解决方法是，使用Object.keys方法将对象的键名生成一个数组，然后遍历这个数组。
	另一个方法是使用 Generator 函数将对象重新包装一下。
*/
/* for of遍历对象 */
const obj1 = { a: 0, b: true };

// for (let i of obj1) {
// 	console.log(i); //报错
// }

const obj2 = {
	a: 0,
	b: true,
	c: 1111,
	d: "abcd",
	e: false,
	// 定义[Symbol.iterator]属性
	[Symbol.iterator]: symbolIterator,
};

// 不能写箭头函数,否则无法更改this
function symbolIterator() {
	// 储存this,指向调用方法的对象
	const _this = this;
	// Object.keys的元素下标
	let i = 0;
	// 返回一个对象,对象包含next方法
	return {
		// next方法,返回一个对象,对象包含value和done属性
		next: () => {
			// 判断Object.keys是否有下一项
			// 有,返回{value:对象对应的属性值,done:false}
			// 没有,返回{value:undefined,done:true}
			return i < Object.keys(_this).length ? {
				value: _this[Object.keys(_this)[i++]],
				done: false,
			} : {
				value: undefined,
				done: true,
			};
		},
	};
}

/* 测试 */
// // for of
// for (const iterator of obj2) {
// 	console.log(iterator);
// }

// // 迭代
// const iterator = obj2[Symbol.iterator]();
// for (let i = 0; i <= Object.keys(obj2).length; i++) {
// 	console.log(iterator.next());
// }

const obj3 = {
	a: {
		b: 1,
		c: 2,
	},
	d: function () {
		console.log(this.a);
	},
	c: ["A", "b", "c"],
	[Symbol.iterator]: symbolIterator,
};

for (const iterator of obj3) {
	console.log(iterator);
}

const iterator = obj3[Symbol.iterator]();

for (let i = 0; i <= Object.keys(obj3).length; i++) {
	console.log(iterator.next());
}
