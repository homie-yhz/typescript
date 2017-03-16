/**
 * 1.当一个对象实现了Symbol.iterator 属性时，我们认为他是可迭代的。
 */
//for...of 语句
//for of 会 迭代val
var someArray = [1, 'string', false];
for (var _i = 0, someArray_1 = someArray; _i < someArray_1.length; _i++) {
    var val = someArray_1[_i];
    console.log(val); //1,'string',false
}
//for in 会迭代key
var list = [3, 4, 5];
for (var key in list) {
    console.log(key); //0,1,2 键
}
for (var _a = 0, list_1 = list; _a < list_1.length; _a++) {
    var val = list_1[_a];
    console.log(val); //3,4,5 值
}
//# sourceMappingURL=12.迭代器和生成器.js.map