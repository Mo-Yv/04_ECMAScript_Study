/* 
	生成器(Generator)的本质是一个函数
	有两个特征:
	一是，function关键字与函数名之间有一个星号；
	二是，函数体内部使用yield表达式，定义不同的内部状态（yield在英语里的意思就是“产出”）。

	由于 Generator 函数返回的遍历器对象，
	只有调用next方法才会遍历下一个内部状态，
	所以其实提供了一种可以暂停执行的函数。
	yield表达式就是暂停标志。

	遍历器对象的next方法的运行逻辑如下:
	1.遇到 yield 表达式，就暂停执行后面的操作，并将紧跟在 yield 后面的那个表达式的值，作为返回的对象的 value 属性值。
	2.下一次调用 next 方法时，再继续往下执行，直到遇到下一个 yield 表达式。
	3.如果没有再遇到新的 yield 表达式就一直运行到函数结束，直到 return 语句为止，并将 return 语句后面的表达式的值作为返回的对象的 value 属性值。
	4.如果该函数没有 return 语句，则返回的对象的 value 属性值为 undefined。

	Generator 函数可以不用yield表达式，这时就变成了一个单纯的暂缓执行函数。
 */
function* fun() {
	let str = "Hello world";
	console.log(str);
	yield "第一步";
	console.log(typeof str);
	yield "第二步";
	console.log(str.length);
	yield "第三步";
	str = str.toLocaleUpperCase();
	console.log(str);
	yield "第四步";
	str = str.replace(" ", ",");
	console.log(str);
	yield "第五步";
	str = str.split("");
	console.log(str);
}

// fun(); //没有任何输出

const generator = fun();

// for(let i = 0;i <= 5;i++) {
// 	console.log(generator.next());
// }

// for (const iterator of generator) {
// 	console.log(iterator);
// }

/* 可以不使用yield */
function* fun2() {
	console.log("执行函数");
}

const generator2 = fun2();
// generator2.next(); //执行函数
// generator2.next(); //undefined

/* 函数执行的返回值 */
function* fun3() {
	return "Hello world";
}

// console.log(fun3().next()); //{value: "Hello world", done: false}
// console.log(fun3());

/* 
	没有规定 * 具体写在哪里,
	只要是在function关键字跟函数名之间就可以
	所以一下格式都是没问题的
*/
function* fun4() {
	yield "第一步";
}

function* fun4() {
	yield "第一步";
}

function* fun4() {
	yield "第一步";
}

console.log(fun4().next());
