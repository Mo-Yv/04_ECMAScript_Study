/* 		
	除了定义自己使用的 Symbol 值以外，ES6 还提供了 11 个内置的 Symbol 值，指向语言内部使用的方法。
	https://es6.ruanyifeng.com/#docs/symbol#%E5%86%85%E7%BD%AE%E7%9A%84-Symbol-%E5%80%BC

	01.Symbol.hasInstance 
	当其他对象使用 instanceof 运算符，判断是否为该对象的实例时，会调用这个方法

	02.Symbol.isConcatSpreadable 
	对象的 Symbol.isConcatSpreadable 属性等于的是一个布尔值，表示该对象用于 Array.prototype.concat()时，是否可以展开。

	03.Symbol.species 
	创建衍生对象时，会使用该属性

	04.Symbol.match 
	当执行 str.match(myObject) 时，如果该属性存在，会调用它，返回该方法的返回值。

	05.Symbol.replace 
	当该对象被 str.replace(myObject)方法调用时，会返回该方法的返回值。

	06.Symbol.search 
	当该对象被 str. search (myObject)方法调用时，会返回该方法的返回值。

	07.Symbol.split 
	当该对象被 str. split (myObject)方法调用时，会返回该方法的返回值。

	08.Symbol.iterator 
	对象进行 for...of 循环时，会调用 Symbol.iterator 方法，返回该对象的默认遍历器

	09.Symbol.toPrimitive 
	该对象被转为原始类型的值时，会调用这个方法，返回该对象对应的原始类型值。

	10.Symbol. toStringTag 
	在该对象上面调用 toString 方法时，返回该方法的返回值
	
	11.Symbol. unscopables 
	该对象指定了使用 with 关键字时，哪些属性会被 with环境排除。
*/

