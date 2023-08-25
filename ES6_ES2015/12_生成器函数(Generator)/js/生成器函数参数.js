/* 
	给next方法传递参数是不会影响方法本身的返回值的
	仍然返回{value:yield后的值(表达式)/undefined,done:false/true}
	影响的是yield的返回值
	不传参数,yield就返回undefined
*/
function* fun1(a) {
	console.log("生成器函数接收的参数:", a);
	const firstYield = yield "first";
	console.log("firstYield =", firstYield); //true
	const secondYield = yield "second";
	console.log("secondYield =", secondYield); //hello
	const thirdYield = yield "third";
	console.log("thirdYield =", thirdYield); //undefined
}

// 直接给构造器函数传递参数,是跟普通函数一样接收的
const generator1 = fun1(12345);
// 给第1次调用的next方法传递参数,没有任何作用
console.log(generator1.next(114514)); //{value: 'first', done: false}
// 给第2次调用的next方法传递参数,将会作为第1个yield的返回值
console.log(generator1.next(true)); //{value: 'second', done: false}
// 给第3次调用的next方法传递参数,将会作为第2个yield的返回值
console.log(generator1.next("hello")); //{value: "third", done: true}
// 不传参数就是undefined
console.log(generator1.next()); //{value: undefined, done: true}
// 如果后面还有,以此类推
