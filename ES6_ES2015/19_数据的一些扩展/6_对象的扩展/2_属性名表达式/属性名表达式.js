/* 
	JS 定义对象的属性，有两种方法
	方法一是直接用标识符作为属性名，
	方法二是用表达式作为属性名，这时要将表达式放在方括号之内
 */
let obj = {};

// 方法一
obj.abc = 10;

// 方法二
obj["a" + "b"] = 20;

console.log(obj);
console.log(obj.ab); //20

// ES6 允许字面量定义对象时，用方法二（表达式）作为对象的属性名，即把表达式放在方括号内
const bcd = "xyz";
obj = { [bcd]: "hhh" };
console.log(obj);
console.log(obj[bcd]); //hhh
console.log(obj["bcd"]); //undefined
console.log(obj["xyz"]); //hhh

// 注意，属性名表达式与简洁表示法，不能同时使用，会报错
const a = "武装直升机";
obj = {
	// [bcd], //报错
	[bcd]: [a],
};
console.log(obj[bcd]);

// 如果属性名表达式是一个对象，
// 默认情况下会自动将对象转为字符串 "[object Object]"
obj = { [obj]: a };
console.log(obj);
