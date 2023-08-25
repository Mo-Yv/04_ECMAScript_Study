const arr1 = [2, 0, 0, 2, 0, 5, 1, 4],
	arr2 = [1, 8, 9, 2, 4, 0, 1, 1, 4, 3, 4],
	set1 = new Set(arr1),
	set2 = new Set(arr2);
	
console.log(set1, set2);

/* 数组去重 */
// const newArr = [...set1];
// console.log(newArr);

/* 交集 */
const intersect = [...set1].filter(item => set2.has(item));
console.log("交集: ", intersect);

/* 并集 */
const union = [...set1].concat([...set2]);
console.log("并集: ", union);
console.log("并集去重: ", [...new Set(union)]);

/* 差集 */
// set1于set2的差集(set1有,set2没有)
const subtraction = [...set1].filter(item => !set2.has(item));
console.log("set1于set2的差集: ", subtraction);

// set2于set1的差集(set2有,set1没有)
const difference = [...set2].filter(item => !set1.has(item));
console.log("set2于set1的差集: ", difference);

/* 子集 */
const subSet = [...set1].every(item => set2.has(item));
console.log("子集: ", subSet);
