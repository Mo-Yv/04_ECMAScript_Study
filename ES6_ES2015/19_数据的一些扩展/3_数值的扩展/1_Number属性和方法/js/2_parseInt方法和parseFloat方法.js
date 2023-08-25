/* 
	ES6 将全局方法parseInt()和parseFloat()，
	移植到Number对象上面，行为完全保持不变
 */
/* ES5的写法 */
console.log(parseInt("20哈02"));
console.log(parseFloat("12.2哈1"));

/* ES6的写法 */
console.log(Number.parseInt("20哈02")); //20
console.log(Number.parseFloat("12.2哈1")); //12.2
