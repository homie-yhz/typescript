/**
 * 1.当一个对象实现了Symbol.iterator 属性时，我们认为他是可迭代的。
 */

//for...of 语句
//for of 会 迭代val
let someArray = [1,'string',false];
for(let val of someArray){
    console.log(val); //1,'string',false
}

//for in 会迭代key
let list  = [3,4,5];
for(let key in list){
    console.log(key); //0,1,2 键
}
for(let val of list){
    console.log(val); //3,4,5 值
}
