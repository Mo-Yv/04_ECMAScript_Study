const map = new Map();
map.set("name", "zs");
map.set([true, 111], false);
map.set(
	{
		age: 20,
		info: "This is info",
	},
	18
);
console.log(map);

/* Map => Array */
const arr1 = [...map];
console.log(arr1);

/* Array => Map */
const newMap = new Map(arr1);
console.log(newMap);

/* Map => Object */
// function strMapToObj(strMap) {
// 	let obj = Object.create(null);
// 	for (let [k, v] of strMap) {
// 		obj[k] = v;
// 	}
// 	return obj;
// }
// const obj = strMapToObj(map);

const obj = Object.fromEntries(map);
console.log(obj);

/* Object => Map */
const newMap2 = new Map(Object.entries(obj));
console.log(newMap2);

/* Map => JSON Map 转为 JSON 要区分两种情况 */
// 1: Map 的键名都是字符串，这时可以选择转为对象 JSON。
const map2 = new Map().set("a", 1).set("b", 2).set("c", 3);
const objJson = JSON.stringify(Object.fromEntries(map2));
console.log(objJson);

// 2: Map 的键名有非字符串，这时可以选择转为数组 JSON。
const map3 = new Map().set(1, "a").set([1, 3, 5], "b").set({ a: 1, b: true }, "c");
const arrJson = JSON.stringify(Array.from(map3));
console.log(arrJson);
