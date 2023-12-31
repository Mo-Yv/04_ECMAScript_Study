/* 
	有时，我们希望重新使用同一个 Symbol 值，Symbol.for()方法可以做到这一点。
	它接受一个字符串作为参数，然后搜索有没有以该参数作为名称的 Symbol 值。
	如果有，就返回这个 Symbol 值，否则就新建一个以该字符串为名称的 Symbol 值，并将其注册到全局。

	Symbol.for()与Symbol()这两种写法，都会生成新的 Symbol。
	它们的区别是，前者会被登记在全局环境中供搜索，后者不会。
	Symbol.for()不会每次调用就返回一个新的 Symbol 类型的值，而是会先检查给定的key是否已经存在，如果不存在才会新建一个值。
	比如，如果你调用Symbol.for("cat")30 次，每次都会返回同一个 Symbol 值，
	但是调用Symbol("cat")30 次，会返回 30 个不同的 Symbol 值。
*/
/* Symbol.for */
const s1 = Symbol.for("abc");
const s2 = Symbol.for("abc");

console.log(s1 === s2); //true

/* Symbol.keyFor()方法返回一个已登记的 Symbol 类型值的key */
const sk1 = Symbol.keyFor(s1);
console.log(sk1); //abc

// s3属于未登记的 Symbol 值，所以返回undefined
const s3 = Symbol("asd");
console.log(Symbol.keyFor(s3)); //undefined

// description属性都可以获取
console.log("s1:", s1.description);
console.log("s3:", s3.description);
