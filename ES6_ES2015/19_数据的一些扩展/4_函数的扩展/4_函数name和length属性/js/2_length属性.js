/* 
	length属性的含义是，该函数预期传入的参数个数。
	某个参数指定默认值以后，
	预期传入的参数个数就不包括这个参数了。
	同理，rest 参数也不会计入length属性

	函数参数指定了默认值以后，函数的length属性，
	将返回"没有指定默认值"的参数个数。
	也就是说，指定了默认值后，length属性将失真
 */
let funLength = function (a) {}.length;
console.log(funLength); //1

funLength = function (a = 5) {}.length;
console.log(funLength); //0

funLength = function (a, b, c = 5) {}.length;
console.log(funLength); //2

funLength = function (...args) {}.length;
console.log(funLength); //0

// 如果设置了默认值的参数不是尾参数，
// 那么length属性也不再计入后面的参数了
funLength = function (a = 0, b, c) {}.length;
console.log(funLength); //0

funLength = function (a, b = 1, c) {}.length;
console.log(funLength); //1
