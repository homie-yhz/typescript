/**
 * Created by yindi on 17/3/14.
 */
/** 7 使用枚举(enum 是一种类型) 我们可以定义一些 有名字的数字常量 */
/** 使用枚举类型可以为一组数值富裕有好的名字 */
var Direcion;
(function (Direcion) {
    Direcion[Direcion["Up"] = 1] = "Up";
    Direcion[Direcion["Down"] = 2] = "Down";
    Direcion[Direcion["Left"] = 3] = "Left";
    Direcion[Direcion["Right"] = 4] = "Right"; //枚举成员
})(Direcion || (Direcion = {}));
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
//默认从 0 开始
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
;
var colorName = Color[2];
alert(colorName);
//# sourceMappingURL=7.枚举.js.map