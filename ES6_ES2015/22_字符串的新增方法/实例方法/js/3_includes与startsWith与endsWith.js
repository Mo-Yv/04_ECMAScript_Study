/* 
	传统上，JS只有indexOf()，可以用来确定一个字符串是否包含在另一个字符串中。

	ES6又提供了三种新方法:
		includes(str, index)
			str(必须): 目标字符(串)
			index(可选): 表示开始搜索的位置(从string[index]检索到整个字符串结束)
			返回布尔值，表示是否找到了参数字符串。
		startsWith(str, index)
			参数与includes相同
			返回布尔值，表示参数字符串是否在原字符串的头部。
		endsWith(str, index)
			str与前面相同
			index: 针对前index个字符(从string[0]检索到string[index])
			返回布尔值，表示参数字符串是否在原字符串的尾部

*/
const groupLog = (text, callback) => {
	console.group(text);
	{
		callback();
	}
	console.groupEnd();
};

let str = "Hello world!",
	result;

groupLog("includes", function () {
	result = str.includes("l");
	console.log(result); //true

	result = str.includes("L");
	console.log(result); //false

	result = str.includes("");
	console.log(result); //true

	result = str.includes("el", -2);
	console.log(result); //false
});

groupLog("startsWith", function () {
	result = str.startsWith("H");
	console.log(result); //true

	result = str.startsWith("h");
	console.log(result); //false

	result = str.startsWith("");
	console.log(result); //true
});

groupLog("endsWith", function () {
	result = str.endsWith("!");
	console.log(result); //true

	result = str.endsWith("");
	console.log(result); //true

	result = str.endsWith("world!");
	console.log(result); //true
});