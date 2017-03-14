/**
 * Created by yindi on 17/3/13.
 */

//1.    基于类的集成并且对象是累构建出来的
class Greeter {   //声明:Greeter 类
    greeting:string;     //声明:string 类型 的  属性:greeting

    constructor(message:string) {    //构造函数
        this.greeting = message;
    }

    greet() {      //greet 方法
        return 'Hello,' + this.greeting;    //引用一个类成员的时候用 this
    }
}
let greeter = new Greeter('world');
/*
* 使用new 构造了一个 Greeter类的一个实例
* 调用之前定义的构造函数
* 创建一个Greeter 类型的新对象
* 冰执行构造函数 初始化它
*/

//2.

