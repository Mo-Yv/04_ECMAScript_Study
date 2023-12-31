/* 
	find()
		用于找出第一个符合条件的数组成员。
		它的参数是一个回调函数，并可以接受三个参数，
		依次为当前的值、当前的位置和原数组
		所有数组成员依次执行该回调函数，
		直到找出第一个返回值为true的成员，然后返回该成员。
		如果没有符合条件的成员，则返回undefined
	findIndex()
		用法与find()方法非常类似，
		返回第一个符合条件的数组成员的位置，
		如果所有成员都不符合条件，则返回-1
 */
let arr = [5, 8, 6, 1, 3];

// find返回第一个符合条件的成员
let result = arr.find(item => item > 5);
console.log(result); //8

// 没有,返回undefined
result = arr.find(item => item < 0);
console.log(result); //undefined

// result = arr.find((item,index,arr) => {
// 	console.log(item,index,arr);
// 	return item > 5;
// });

// findIndex返回第一个符合条件的成员的下标
result = arr.findIndex(item => item > 6);
console.log(result); //1

// 没有,返回-1
result = arr.findIndex(item => item < 0);
console.log(result); //-1

// find,findIndex都可以接受第二个参数
// 用来绑定回调函数的this对象
function fun(item) {
	return item < this.num;
}

const obj = { info: "info", num: 4 };

result = arr.find(fun, obj);
console.log(result); //1

result = arr.findIndex(fun, obj);
console.log(result); //3

/* find,findIndex都可以发现NaN */
arr = [null, undefined, NaN];

result = arr.find(item => Object.is(NaN, item));
console.log(result); //NaN

result = arr.findIndex(item => Object.is(NaN, item));
console.log(result); //2

// indexOf
result = arr.indexOf(NaN);
console.log(result); //-1
