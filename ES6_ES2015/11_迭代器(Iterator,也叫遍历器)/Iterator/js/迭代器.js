/* 
	JS原有的表示“集合”的数据结构，主要是数组（Array）和对象（Object），ES6 又添加了Map和Set。
	这样就有了四种数据集合，用户还可以组合使用它们，定义自己的数据结构，比如数组的成员是Map，Map的成员是对象。
	这样就需要一种统一的接口机制，来处理所有不同的数据结构。

	迭代器（Iterator,也叫遍历器）就是这样一种机制。
	它是一种接口，为各种不同的数据结构提供统一的访问机制。
	任何数据结构只要部署 Iterator 接口，就可以完成遍历操作（即依次处理该数据结构的所有成员）。

	Iterator 的作用有三个：
	1.为各种数据结构，提供一个统一的、简便的访问接口
	2.使得数据结构的成员能够按某种次序排列
	3.ES6 创造了一种新的遍历命令for...of循环，Iterator 接口主要供for...of消费

	Iterator 的遍历过程是这样的:
	1.创建一个指针对象，指向当前数据结构的起始位置。也就是说，遍历器对象本质上，就是一个指针对象。
	2.第一次调用指针对象的next方法，可以将指针指向数据结构的第一个成员。
	3.第二次调用指针对象的next方法，指针就指向数据结构的第二个成员。
	4.不断调用指针对象的next方法，直到它指向数据结构的结束位置。

	每一次调用next方法，都会返回一个包含value和done两个属性的对象。
	value属性是当前成员的值，
	done属性是一个布尔值，表示遍历是否结束
*/
const arr = ["A", "b", "cc", "DDD"];
console.log(arr[Symbol.iterator]);

let iterator = arr[Symbol.iterator]();

console.log(iterator.next()); //{value: 'A', done: false}
console.log(iterator.next()); //{value: 'b', done: false}
console.log(iterator.next()); //{value: 'cc', done: false}
console.log(iterator.next()); //{value: 'DDD', done: false}
// 已经迭代完毕
console.log(iterator.next()); //{value: undefined, done: true}
