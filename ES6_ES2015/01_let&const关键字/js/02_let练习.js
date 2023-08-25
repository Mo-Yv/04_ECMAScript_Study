let lis = document.querySelector("ul").querySelectorAll("li");

// for(var i = 0;i < lis.length;i++){
// 	lis[i].onclick = function() {
// 		lis[i].style.backgroundColor = "#0ff";
// 	}
// }

for (let j = 0; j < lis.length; j++) {
	lis[j].onclick = function () {
		lis[j].style.backgroundColor = "#0ff";
	};
}
