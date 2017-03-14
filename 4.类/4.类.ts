/**
 * Created by yindi on 17/3/13.
 */

/** 1.基于类的集成并且对象是累构建出来的 */
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
/**
 * 使用new 构造了一个 Greeter类的一个实例
 * 调用之前定义的构造函数
 * 创建一个Greeter 类型的新对象
 * 并执行构造函数 初始化它
 */

/** 2.继承 */

/**
 * extends(扩展) 来创建子类
 * 子类可以访问父类的属性和方法
 * 子类构造函数的派生类 必须调用 super() 他会执行父类的构造方法
 *
 */

class Animal {
    name:string;

    constructor(theName:string) {
        this.name = theName;
    }

    move(distance:number = 0) {
        console.log(`${this.name} moved ${distance}m`);
    }
}

class Snake extends Animal {  //extends 来扩展父类
    constructor(name:string) {
        super(name);   //要执行父类的构造方法,必须调用  super()方法
    }

    move(distance = 5) {    //给了distance 一个默认值
        console.log('Slithering...');
        super.move(distance);
    }
}


class Horse extends Animal {
    constructor(name:string) {
        super(name);
    }

    move(distance = 45) {   //给了distance 一个默认值
        console.log("Galloping...");
        super.move(distance);
    }
}

let sam = new Snake("Sammy the Python");
let tom:Animal = new Horse("Tommy the Palomino");
//注意:这里虽然给tom 指定了 Animal 类型,单因为他的值是Horse, tom.move(34) 会调用horse 里面的重写方法

sam.move();
tom.move(34);
/*
 * Slithering...
 Sammy the Python moved 5m.
 Galloping...
 Tommy the Palomino moved 34m.
 */

/** 3.公共,私有与受保护的修饰符 */

/** 3.1 public  (默认) */

//我们同时也可以明确的将一个成员标记成  public

class Animal1 {
    public name:string;

    public constructor(theName:string) {
        this.name = theName;
    }

    public move(distanceInMeters:number) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
/** 3.2 private  */
//当成员被声明了private 时,他就不能再声明它的 类 的外面被访问.
class Animal2 {
    private name:string;

    constructor(theName:string) {
        this.name = theName;
    }
}
//new Animal2('cat').name;   //error:'name' is private;
class Animal3 {
    private name:string;

    constructor(theName:string) {
        this.name = theName;
    }
}

class Rhino extends Animal3 {
    constructor() {
        super("Rhino");
    }
}

class Employee {
    private name:string;

    constructor(theName:string) {
        this.name = theName;
    }
}

let animal5 = new Animal3("Goat");
let rhino = new Rhino();
let employee = new Employee("Bob");

animal5 = rhino;
// console.log(animal5);
//animal2 = employee; // Error: Animal and Employee are not compatible

/** 3.3 protected */
//protected修饰符与private修饰符的行为很相似，但有一点不同，protected成员在派生类中仍然可以访问。
//构造函数也可以被标记成protected。 这意味着这个类不能在包含它的类外被实例化，但是能被继承
/** 3.4 readonly 修饰符*/
// 可以使用readonly 关键字将属性设置为只读的.只读属性必须在声明时或构造函数里被初始化.
class Octopus {
    readonly name:string;
    readonly numberOfLegs:number = 8;

    constructor(theName:string) {
        this.name = theName;
    }
}
let dad = new Octopus('Man with the 8 strong legs');
// dad.name = 'Max wite the 3picec suite'; //error!name is readonly

/** 3.5 参数属性  (方法里面的参数)*/
class Animal4 {
    constructor(private name:string) {  //参数属性里面
        /** 我们仅在构造函数里使用  private name :string 参数来穿件和初始化name 成员.我们吧声明和复制合并至一处.*/
    }

    move(distance:number) {
        console.log(`${this.name} moved ${distance}m.`);
    }
}

/** 3.6 存储器 不太懂*/

/** 3.7 静态属性 static*/
//上面的实例成员,是那些仅当累被实例化的时候才会被初始化的属性.
//我们也可以双肩类的静态成员,这些属性存在于类本身上面而不是类的实例上.

class Grid {
    static origin = {x: 0, y: 0}; //用static(静态)修饰符来表示静态属性
    constructor(public  scale:number) {
    }

    calculateDistanceFromOrigin(point:{x:number;y:number}) {
        let xDist = (point.x - Grid.origin.x);
        let yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
}
let grid1 = new Grid(1.0);
let grid2 = new Grid(5.0);

console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}));
console.log(grid2.calculateDistanceFromOrigin({x: 10, y: 10}));

/** 3.8 抽象类   不懂*/
// 抽象类中的抽象方法不包含具体实现并且必须在派生类中实现.
// 抽象方法的语法与接口方法类似.两者都是定义方法签名但不包含方法体.
// 然而,抽象方法必须包含 abstract 关键字并且可以包含访问修饰符
/** 3.9 高级技巧*/
/** 3.9.1 构造函数*/
/** 3.9.2 把类当做接口来使用*/
class Point {
    x:number;
    y:number;
}
interface Point3d extends Point {
    z:number;
}
let point3d:Point3d = {x: 1, y: 2, z: 3};

/**
 * 总结:
 * 1.我们完全可以把类这个概念想象成为js中的对象(都含有属性和方法)
 * 2.对象中的方法必须要手动调用,而当实例化一个类的时候,里面就会自动调用constructor函数!!!
 * */




