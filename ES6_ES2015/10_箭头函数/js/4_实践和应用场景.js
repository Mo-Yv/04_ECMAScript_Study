/* 
	箭头函数适用于与this无关的回调函数,比如定时器和数组方法的回调等,
	不适用于与this有关的回调,比如DOM元素的操作等
 */
document.querySelector("div").onclick = function () {
	/* ES6之前,使用普通函数写法 */
	// const _this = this;
	// console.log(_this); //div
	// setTimeout(function() {
	// 	// console.log(this); //window对象
	// 	_this.style.backgroundColor = "#000";
	// 	// this.style.backgroundColor = "#000"; //报错
	// }, 2000);

	/* 箭头函数写法 */
	setTimeout(() => {
		console.log(this); //div
		this.style.backgroundColor = "#000";
	}, 2000);
};

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 10];

// const result = arr.filter(function(item) {
// 	return !(item % 2);
// });

const result = arr.filter(item => !(item % 2));
console.log(result);
