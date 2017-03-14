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
//在赋值语句的一边指定了类型但是另一边没有类型的话，
// TypeScript编译器会自动识别出类型
// 这叫做按上下文归类
let myAdd4 = function (x:number, y:number):number {
    return x + y;
};
let myAdd5:(baseValue:number, increment:number) => number =
    function (x, y) {
        return x + y;
    };

/** 5.3可选参数与默认参数 */
/** 传递给一个函数的参数个数必须与函数期望的参数个数一致。*/
function buildName(firstName:string, lastName:string) {
    return firstName + ' ' + lastName;
}
// let result1=buildName('bob');     //error too few parameters
// let result2=buildName('bob','adams','Sr.'); //error too many parameters
let result3 = buildName('blb', 'adams');

/** 在参数名字后面加入 '?'  来表示可选参数功能
 *  可选参数必须跟在必须参数后面
 * */

function buildName2(firstName:string, lastName?:string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

let result4 = buildName2("Bob");  // works correctly now
// let result5 = buildName2("Bob", "Adams", "Sr.");  // error, too many parameters
let result6 = buildName2("Bob", "Adams");  // ah, just right

/** 默认值 */
function buildName3(firstName:string, lastName = "Smith") {
    return firstName + " " + lastName;
}

let result7 = buildName3("Bob");                  // works correctly now, returns "Bob Smith"
let result8 = buildName3("Bob", undefined);       // still works, also returns "Bob Smith"
// let result9 = buildName3("Bob", "Adams", "Sr.");  // error, too many parameters
let result10 = buildName3("Bob", "Adams");         // ah, just right
let result11 = buildName3("Bob", null);     // still works, also returns "Bob Smith"

/** 可选参数与默认值参数 !!!都是可选的!!!!  他们共享参数类型*/

/** 与普通可选参数不同的是，带默认值的参数不需要放在必须参数的后面。 如果带默认值的参数出现在必须参数前面，用户必须明确的传入 undefined值来获得默认值*/

/** 5.4 剩余参数 */
function buildName4(firstName:string, ...restOfName:string[]) {
    return firstName + " " + restOfName.join(" ");
}

let employeeName = buildName4("Joseph", "Samuel", "Lucas", "MacKinzie");
function buildName5(firstName:string, ...restOfName:string[]) {
    return firstName + " " + restOfName.join(" ");
}

let buildNameFun:(fname:string, ...rest:string[]) => string = buildName5;


/** 5.5 this */
/** 5.5.1 this 和 箭头函数 */
