/* 
	ES5 的对象属性名都是字符串，这容易造成属性名的冲突。
	比如，你使用了一个他人提供的对象，但又想为这个对象添加新的方法，新方法的名字就有可能与现有方法产生冲突。
	如果有一种机制，保证每个属性的名字都是独一无二的就好了，这样就从根本上防止属性名的冲突。
	这就是 ES6 引入Symbol的原因。

	使用Symbol类型的变量或常量作为属性名,
	那么这个变量或常量必须定义在对象的同级或上级作用域里
	总之就是,要调用时能获取得到的地方
	如果直接在对象里新定义Symbol作为属性名,那么这个属性是没法调用的 
*/
const newAttribute = Symbol("newAttribute");

const obj = {
	newAttribute: "这是原来的newAttribute属性",
};

obj[newAttribute] = "This is a new attribute";

console.log(obj);
console.log(obj[newAttribute]);
console.log(obj["newAttribute"]);
console.log(obj.newAttribute);

Object.defineProperty(obj, newAttribute, {
	value: "This is a newAttribute in obj",
});

console.log(obj);
console.log(obj[newAttribute]);

/* Symbol作为属性名时,不能用".",否则就是普通的属性名 */
obj.newAttribute = "A new attribute!";
console.log(obj.newAttribute); //A new attribute!
console.log(obj[newAttribute]); //This is a newAttribute in obj

// 在对象中调用Symbol时.需要加[],否则就是普通的属性名
const newObj = {
	[newAttribute]: "This is a attribute in newObj",
	fun1: function () {
		console.log(this.newAttribute);
	},
	fun2: function () {
		console.log(this[newAttribute]);
	},
};

console.log(newObj);
console.log(newObj[newAttribute]);
newObj.fun1(); //undefined
newObj.fun2(); //This is a attribute in newObj

/* 如果直接在对象里新定义Symbol作为属性名,那么这个属性是没法调用的 */
// const anotherObj = {
// 	[Symbol("a")]: 12345,
// 	[Symbol("b")]: function() {
// 		console.log("this[Symbol("a")] =", this[Symbol("a")]);
// 	}
// }

// console.log(anotherObj);
// console.log(anotherObj[Symbol("a")]); //undefined
