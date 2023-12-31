/* 
	ES6 加强了对 Unicode 的支持，
	允许采用 \u + xxxx 形式表示一个字符，
	其中xxxx表示字符的 Unicode 码点

	但是，这种表示法只限于码点在\u0000~\uFFFF之间的字符。
	超出这个范围的字符，必须用两个双字节的形式表示
	
	如果直接在\u后面跟上超过0xFFFF的数值（比如\u20BB7），
	JavaScript 会理解成\u20BB+7
	由于\u20BB是一个不可打印字符
	所以只会显示一个空格，后面跟着一个7

	ES6 对这一点做出了改进，
	只要将码点放入大括号，就能正确解读该字符
 */
const print = val => console.log(val === undefined ? str : val);

let str = "\u0061";
print(); //a

str = "\u20BB7";
print(); //" 7"

str = "\uD842\uDFB7";
print(); //𠮷

str = "\u{20BB7}";
print(); //𠮷

str = "\u{41}\u{42}\u{43}";
print(); //ABC

/* 
	有了这种表示法之后，
	JavaScript 共有 6 种方法可以表示一个字符 
*/
// 转义
print("z"); //z

// 八进制
// 编辑器报错,但浏览器依旧可以输出
// print("\172"); //z

// 十六进制
print("\x7A"); //z

// Unicode编码
print("\u007A"); //z

// Unicode编码
print("\u{7A}"); //z
