/* 实现遍历器 */
// 声明一个构造函数,接收一个数组
// 此构造函数对象有两个属性
// 1.arr: 值为传入的数组
// 2.index: 数组元素下标
function MyIterator(arr) {
	this.arr = arr;
	this.index = 0;
}

// 向原型上添加next方法
MyIterator.prototype.next = function () {
	// 判断是否还有下一个元素
	// 有,返回{value:当前元素,done:false}
	// 没有,返回{value:undefined,done:true}
	return this.index < this.arr.length
		? {
				value: this.arr[this.index++],
				done: false,
		  }
		: {
				value: undefined,
				done: true,
		  };
};

/* 测试 */
// 初始化对象
const myIterator = new MyIterator(["A", "B", "C", "D"]);
console.log(myIterator);

for (let i = 0; i <= myIterator.arr.length; i++) {
	console.log(myIterator.next());
}

// console.log(myIterator.next()); //{value: 'A', done: false}
// console.log(myIterator.next()); //{value: 'B', done: false}
// console.log(myIterator.next()); //{value: 'C', done: false}
// console.log(myIterator.next()); //{value: 'D', done: false}
// console.log(myIterator.next()); //{value: undefined, done: true}
