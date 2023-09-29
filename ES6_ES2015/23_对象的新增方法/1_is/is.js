/* 
	ES5 比较两个值是否相等，只有两个运算符：相等运算符（==）和严格相等运算符（===）。
	它们都有缺点，前者会自动转换数据类型，后者的NaN不等于自身，以及+0等于-0。
	JS缺乏一种运算，在所有环境中，只要两个值是一样的，它们就应该相等

	ES6 提出“Same-value equality”(同值相等)算法，用来解决这个问题。
	Object.is就是部署这个算法的新方法。
	它用来比较两个值是否严格相等，与严格比较运算符(全等, ===)的行为基本一致
*/
console.log(`
	NaN==NaN => ${NaN == NaN}
`.trim()); //false

console.log(`
	+0==-0 => ${0 == -0}
`.trim()); //true

// 不同之处只有两个: 一是+0不等于-0，二是NaN等于自身
console.log(`
	Object.is(+0, -0) => ${Object.is(0, -0)}
`.trim()); //false

console.log(`
	Object.is(NaN, NaN) => ${Object.is(NaN, NaN)}
`.trim()); //true

console.log(`
	Object.is("a", "a") => ${Object.is("a", "a")}
`.trim()); //true

console.log(`
	Object.is({}, {}) => ${Object.is({}, {})}
`.trim()); //false

/* 实现 */
Object.defineProperty(Object, "is", {
	value: function(x, y) {
		if(x === y) {
			// 针对0不等于-0的情况
			return x !== 0 || 1 / x === 1 / y;
		}
		// 针对NaN
		return x !== x && y !== y;
	},
	enumerable: false
});

console.group("test");
console.log(Object.is(NaN, NaN)); //true
console.log(Object.is(0, -0)); //true