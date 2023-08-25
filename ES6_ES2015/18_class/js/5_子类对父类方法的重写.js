class Human {
	constructor() {}
	print = () => console.log("这是父类方法");
}

class Person {
	constructor() {}
	print = () => console.log("这是子类方法");
}

const ls = new Person();

ls.print();
