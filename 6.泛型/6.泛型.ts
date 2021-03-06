/**
 * Created by yindi on 17/3/14.
 */
/** 6 泛型
 *  使用泛型来创建可重用的组件
 *  一个组件可以支持多种类型的数据,
 *  用户可以以自己的数据类型来使用组件
 * */

/** 6.1 Hello world */
function identity(arg:any):any {
    return arg;
}
/*
 * 虽然使用 any 类型后这个函数已经能接受任何类型的arg参数
 * 但是却丢失了一些信息:传入的类型与返回的类型应该是相同的
 * 如果我们传入一个数字,可是任何类型的值都有可能返回
 * */
//目的:需要一种方法使返回值的类型与传入参数的类型是相同的.
//这里,我们使用了类型变量,它是一种特殊的变量,只用于表示类型而不是值
/** 泛型函数 */
function identity2<T>(arg:T):T {
    return arg;
}
//定义了泛型之后,我们有两种方法使用.第一种:传入所有的参数,包含类型参数;
let output = identity2<string>('myString');
/** 第二种方法更普遍.利用类型推论--即编译器会根据传入的参数自动的帮助我们确定T的类型: */
let output1 = identity2('myString');


/** 6.2 使用泛型变量 */
function identity3<T>(arg:T[]):T[]{
    console.log(arg.length);
    return arg;
}
//也可以这么写
function indetity4<T>(arg: Array<T>):Array<T>{
    console.log(arg.length);
    return arg;
}

/** 6.3 泛型类型 */

