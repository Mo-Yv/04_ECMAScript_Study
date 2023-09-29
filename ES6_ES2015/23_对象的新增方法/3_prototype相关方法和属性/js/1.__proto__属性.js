/* 
	__proto__属性（前后各两个下划线），
	用来读取或设置当前对象的原型对象（prototype）。
	目前，所有浏览器（包括 IE11）都部署了这个属性

	该属性没有写入 ES6 的正文，而是写入了附录，原因是__proto__前后的双下划线，
	说明它本质上是一个内部属性，而不是一个正式的对外的 API，
	只是由于浏览器广泛支持，才被加入了 ES6。
	标准明确规定，只有浏览器必须部署这个属性，其他运行环境不一定需要部署，
	而且新的代码最好认为这个属性是不存在的

	因此，无论从语义的角度，还是从兼容性的角度，都不要使用这个属性
	而是使用 
	Object.setPrototypeOf() 代替写操作、
	Object.getPrototypeOf() 代替读操作、
	Object.create() 代替生成操作
*/
const prototype = { a: "AAA" }

/* 修改对象原型 */
// ES5写法
let obj = {};
obj.__proto__ = prototype;
console.log(obj);

// ES6写法
obj = Object.create(prototype);
console.log(obj);