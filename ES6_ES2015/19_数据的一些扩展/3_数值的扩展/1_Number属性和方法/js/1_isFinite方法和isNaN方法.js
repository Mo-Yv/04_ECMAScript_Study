/* 
	ES6 在Number对象上，
	新提供了 Number.isFinite() 和 Number.isNaN() 两个方法。
	Number.isFinite()用来检查一个数值是否为有限的（finite），即不是Infinity
	Number.isNaN()用来检查一个值是否为NaN

	它们与传统的全局方法isFinite()和isNaN()的区别在于，
	传统方法先调用Number()将非数值的值转为数值，再进行判断，
	而这两个新方法只对数值有效，
	Number.isFinite()对于非数值一律返回false, 
	Number.isNaN()只有对于NaN才返回true，非NaN一律返回false
 */
const print = (val, flag) => {
	const add = flag ? { isFinite: Number.isFinite(val) } : { isNaN: Number.isNaN(val) };
	const obj = {
		value: val,
		typeof: typeof val,
	};
	Object.defineProperty(obj, Object.keys(add)[0], {
		value: Object.values(add)[0],
	});
	console.table([obj]);
};

/* Number.isFinite()
	注意，如果参数类型不是数值，Number.isFinite一律返回false
*/
console.groupCollapsed("Number.isFinite()");

console.group("Number类型");
print(123, true); //true
print(-123, true); //true
print(0, true); //true
print(-0, true); //true
print(Math.PI, true); //true
print(2 / 3, true); //true
print(NaN, true); //false
print(Infinity, true); //false
print(-Infinity, true); //false
console.groupEnd();

console.group("非Number类型,全部返回false");
print("a", true); //false
print("123", true); //false
print("", true); //false
print(" ", true); //false
print("true", true); //false
print(true, true); //false
print(undefined, true); //false
print(null, true); //false
print({}, true); //false
print([0], true); //false
console.groupEnd();

console.groupEnd();

console.group("Number.isNaN()");
print(NaN, false); //true
print(123, false); //false
print("NaN", false); //false
print(true, false); //false
print(null, false); //false
print(undefined, false); //false
console.groupEnd();
