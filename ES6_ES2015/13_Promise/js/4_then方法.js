/* 
	Promise 实例具有then方法，也就是说，then方法是定义在原型对象Promise.prototype上的。
	它的作用是为 Promise 实例添加状态改变时的回调函数。
	then方法接收两个参数:
		第一个参数是 resolved 状态的回调函数
		第二个参数是 rejected 状态的回调函数
	它们都是可选的。

	then方法返回的是一个新的Promise实例（注意，不是原来那个Promise实例）。
	因此可以采用链式写法，即then方法后面再调用另一个then方法。
	也叫链式调用

	then方法返回的是一个新的Promise实例(以下简称tp)
	而第二个开始的tp的状态由上一个tp的返回值决定:
		返回一个非Promise对象的值：
			tp 以该返回值作为其兑现值。
		没有返回任何值：
			tp 以 undefined 作为其兑现值。
		抛出一个错误：
			tp 抛出的错误作为其拒绝值。
		返回一个已兑现的 Promise 对象：
			tp 以该 Promise 的值作为其兑现值。
		返回一个已拒绝的 Promise 对象：
			tp 以该 Promise 的值作为其拒绝值。
		返回另一个待定的 Promise 对象：
			tp 保持待定状态，并在该 Promise 对象被兑现/拒绝后立即以该 Promise 的值作为其兑现/拒绝值。
 */
// 初始化一个Promise对象
const promise = new Promise((resolve, reject) => {
	// 异步操作
	setTimeout(() => {
		const isTrue = Boolean(1);
		// 返回状态
		isTrue ? resolve("成功") : reject("失败");
	}, 1000);
});

// then方法,返回一个新的Promise对象
// 这个Promise对象的状态由then方法的回调函数的执行结果来决定
const pThen = promise.then(
	// 成功(resolved)的回调
	value => {
		console.log("promise.then.resolved:", value);

		/* 如果返回非promise类型的属性 */
		// 状态为成功(resolved)
		// 返回的值就是then方法返回的Promise对象的resolve
		// return "Success";

		/* 如果返回promise类型的属性resolve("Success"); */
		// 那么返回的Promise状态就是then方法返回的Promise对象的状态
		return new Promise((resolve, reject) => {
			true ? resolve("Success") : reject("Error");
		});

		/* 没有return语句则默认返回undefined,是成功状态 */

		/* 抛出异常 */
		// 失败(rejected)状态
		// throw new Error("错误");
	},
	// 失败(rejected)的回调
	reason => {
		console.warn("promise.then.rejected:", reason);
		return reject("Fail");
	}
);

// console.log(pThen); //Promise对象

/*
	then方法返回的是一个新的Promise实例（注意，不是原来那个Promise实例）。
	因此可以采用链式写法，即then方法后面再调用另一个then方法。
	也叫链式调用
*/
const then2 = pThen.then(
	value => {
		console.log("promise.then.then.resolved:", value);
		throw new Error("错误");
	},
	reason => {
		console.warn("promise.then.then.rejected:", reason);
	}
);

// console.log(then2); //Promise对象

// 无论哪一层then,参数都是可选的
const then3 = then2.then(
	value => {
		console.log(".then.then.then.resolved:", reason);
	},
	reason => {
		console.warn(".then.then.then.rejected:", reason);
	}
);
