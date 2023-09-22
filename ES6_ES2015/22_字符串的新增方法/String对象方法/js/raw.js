/* 
	ES6 还为原生的 String 对象，提供了一个raw()方法。
	该方法返回一个斜杠都被转义（即斜杠前面再加一个斜杠）的字符串，
	往往用于模板字符串的处理方法

	语法:
	String.raw(strings, ...substitutions)
		strings: 
			格式正确的模板字符串数组对象，
			例如 { raw: ['foo', 'bar', 'baz'] }，
			应该是一个具有 raw 属性的对象，
			其值是一个类数组的字符串对象
		...substitutions: 
			包含的替换表达式对应的值

	String.raw`templateString`
*/
const comma = ",";

// 完整写法
let strings = { raw: ["Hello", "world"] },
	str = String.raw(strings, comma);

console.log(str); //"Hello,world"

// 等同于,简写
str = String.raw`Hello${comma}world`;
console.log(str);

str = String.raw`Hi\n${2 + 3}!`;
// 实际返回 "Hi\\n5!"，显示的是转义后的结果 "Hi\n5!"
console.log(str); //"Hi\n5!"
console.log(str === `Hi\\n5!`); //true

/* 如果原字符串的斜杠已经转义，那么String.raw()会进行再次转义 */
str = String.raw`Hi\\n`;
console.log(str === "Hi\\\\n"); //true

/* 函数实现 */
String.raw = function (strings, ...values) {
	let output = "";
	let index;
	for (index = 0; index < values.length; index++) {
		output += strings.raw[index] + values[index];
	}
	output += strings.raw[index];
	return output;
};
console.group("test");
{
	str = String.raw`Hi\\n`;
	console.log(str === "Hi\\\\n"); //true

	strings = { raw: ["Hello", "world"] };
	str = String.raw(strings, comma);
	console.log(str); //"Hello,world"
}
console.groupEnd();