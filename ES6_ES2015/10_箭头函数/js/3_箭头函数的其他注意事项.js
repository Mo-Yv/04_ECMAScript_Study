/* 1.不能作为构造实例化对象 */
const Person = (a,b) => {
	this.a = a;
	this.b = b;
}

// const person = new Person("AAA", "BBB"); //报错
// console.log(person);

/* 2.不能使用arguments */
function fun1(){
	console.log(arguments);
}
fun1();

const fun2 = () => console.log(arguments);
fun2(); //报错
