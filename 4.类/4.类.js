/**
 * Created by yindi on 17/3/13.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/** 1.基于类的集成并且对象是累构建出来的 */
var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return 'Hello,' + this.greeting; //引用一个类成员的时候用 this
    };
    return Greeter;
}());
var greeter = new Greeter('world');
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
var Animal = (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.move = function (distance) {
        if (distance === void 0) { distance = 0; }
        console.log(this.name + " moved " + distance + "m");
    };
    return Animal;
}());
var Snake = (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (distance) {
        if (distance === void 0) { distance = 5; }
        console.log('Slithering...');
        _super.prototype.move.call(this, distance);
    };
    return Snake;
}(Animal));
var Horse = (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        return _super.call(this, name) || this;
    }
    Horse.prototype.move = function (distance) {
        if (distance === void 0) { distance = 45; }
        console.log("Galloping...");
        _super.prototype.move.call(this, distance);
    };
    return Horse;
}(Animal));
var sam = new Snake("Sammy the Python");
var tom = new Horse("Tommy the Palomino");
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
var Animal1 = (function () {
    function Animal1(theName) {
        this.name = theName;
    }
    Animal1.prototype.move = function (distanceInMeters) {
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return Animal1;
}());
/** 3.2 private  */
//当成员被声明了private 时,他就不能再声明它的 类 的外面被访问.
var Animal2 = (function () {
    function Animal2(theName) {
        this.name = theName;
    }
    return Animal2;
}());
//new Animal2('cat').name;   //error:'name' is private;
var Animal3 = (function () {
    function Animal3(theName) {
        this.name = theName;
    }
    return Animal3;
}());
var Rhino = (function (_super) {
    __extends(Rhino, _super);
    function Rhino() {
        return _super.call(this, "Rhino") || this;
    }
    return Rhino;
}(Animal3));
var Employee = (function () {
    function Employee(theName) {
        this.name = theName;
    }
    return Employee;
}());
var animal5 = new Animal3("Goat");
var rhino = new Rhino();
var employee = new Employee("Bob");
animal5 = rhino;
// console.log(animal5);
//animal2 = employee; // Error: Animal and Employee are not compatible
/** 3.3 protected */
//protected修饰符与private修饰符的行为很相似，但有一点不同，protected成员在派生类中仍然可以访问。
//构造函数也可以被标记成protected。 这意味着这个类不能在包含它的类外被实例化，但是能被继承
/** 3.4 readonly 修饰符*/
// 可以使用readonly 关键字将属性设置为只读的.只读属性必须在声明时或构造函数里被初始化.
var Octopus = (function () {
    function Octopus(theName) {
        this.numberOfLegs = 8;
        this.name = theName;
    }
    return Octopus;
}());
var dad = new Octopus('Man with the 8 strong legs');
// dad.name = 'Max wite the 3picec suite'; //error!name is readonly
/** 3.5 参数属性  (方法里面的参数)*/
var Animal4 = (function () {
    function Animal4(name) {
        this.name = name;
        /** 我们仅在构造函数里使用  private name :string 参数来穿件和初始化name 成员.我们吧声明和复制合并至一处.*/
    }
    Animal4.prototype.move = function (distance) {
        console.log(this.name + " moved " + distance + "m.");
    };
    return Animal4;
}());
/** 3.6 存储器 不太懂*/
/** 3.7 静态属性 static*/
//上面的实例成员,是那些仅当累被实例化的时候才会被初始化的属性.
//我们也可以双肩类的静态成员,这些属性存在于类本身上面而不是类的实例上.
var Grid = (function () {
    function Grid(scale) {
        this.scale = scale;
    }
    Grid.prototype.calculateDistanceFromOrigin = function (point) {
        var xDist = (point.x - Grid.origin.x);
        var yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    };
    return Grid;
}());
Grid.origin = { x: 0, y: 0 }; //用static(静态)修饰符来表示静态属性
var grid1 = new Grid(1.0);
var grid2 = new Grid(5.0);
console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));
/** 3.8 抽象类   不懂*/
// 抽象类中的抽象方法不包含具体实现并且必须在派生类中实现.
// 抽象方法的语法与接口方法类似.两者都是定义方法签名但不包含方法体.
// 然而,抽象方法必须包含 abstract 关键字并且可以包含访问修饰符
/** 3.9 高级技巧*/
/** 3.9.1 构造函数*/
/** 3.9.2 把类当做接口来使用*/
var Point = (function () {
    function Point() {
    }
    return Point;
}());
var point3d = { x: 1, y: 2, z: 3 };
/**
 * 总结:
 * 1.我们完全可以把类这个概念想象成为js中的对象(都含有属性和方法)
 * 2.对象中的方法必须要手动调用,而当实例化一个类的时候,里面就会自动调用constructor函数!!!
 * */
//# sourceMappingURL=4.类.js.map