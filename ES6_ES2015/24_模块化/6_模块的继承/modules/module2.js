import * as Human from "./module1.js";

console.log(Human);

let address = "广东省深圳市";
let phone = 15612345678;
let email = "15612345678@163.com";

export default {
	...Human,
	address,
	phone,
	email
}

