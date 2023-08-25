/* 
	需求:
	1s后控制台输出111,
	2s后控制台输出222,
	3s后控制台输出333
*/

// 回调地狱
// setTimeout(() => {
// 	console.log(111);
// 	setTimeout(() => {
// 		console.log(222);
// 		setTimeout(() => {
// 			console.log(333);
// 			/* ..... */
// 		}, 3000);
// 	}, 2000);
// }, 1000);

// 生成器函数
function one() {
	setTimeout(() => {
		console.log(111);
		iterator.next();
	}, 1000);
}

function two() {
	setTimeout(() => {
		console.log(222);
		iterator.next();
	}, 2000);
}

function three() {
	setTimeout(() => {
		console.log(333);
		iterator.next();
	}, 3000);
}

function* fun() {
	yield one();
	yield two();
	yield three();
}

const iterator = fun();
iterator.next();
