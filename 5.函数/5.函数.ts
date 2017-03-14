/**
 * Created by yindi on 17/3/14.
 */
/** 5.1 函数(有名函数/匿名函数)*/
function add(x, y) {
    return x + y;
}

let myAdd = function (x, y) {
    return x + y;
};
//函数可以'捕获' 函数体外部的变量
let z = 100;
function addToZ(x, y) {
    return x + y + z;
}

/** 5.2 函数类型*/
/** 5.2.1 为函数定义类型*/

function add1(x:number, y:number):number { //函数名后面的:number表明存在返回值,并且返回值是number类型
    return x + y;
}
let myAdd1 = function (x:number, y:number):number {
    return x + y;
};
/** 5.2.2 书写完整函数类型*/

//函数的完整类型
let myAdd2:(x:number, y:number)=>number =
    function (x:number, y:number):number {
        return x + y;
    };
/*
 * 函数类型包括浪部分:1.参数类型 2.返回值类型
 * 当写出完整函数类型的时候,这两部分都是需要的.
 * 我们一参数列表的形式写出参数类型,
 * 为每个参数制定一个名字和类型.
 * 这个名字是指为了增强可读性.
 */
//上面的例子还可以这么写
let myAdd3:(baseValue:number, increment:number)=>number =
    function (x:number, y:number):number {
        return x + y;
    };
/** 只要参数类型是匹配的就可以,不在乎参数名是否正确*/
/** 函数的返回值类型是必须的!!!!如果没有返回值那么也要用void表示,不能留空!!!*/
/*
* 第二部分是返回值类型.
* 我们在函数和返回值类型之前使用(=>)箭头符号
*/

/** 5.2.3 推断类型 */

