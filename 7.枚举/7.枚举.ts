/**
 * Created by yindi on 17/3/14.
 */
/** 7 使用枚举(enum 是一种类型) 我们可以定义一些 有名字的数字常量 */
/** 使用枚举类型可以为一组数值富裕有好的名字 */
enum Direcion{
    Up = 1,
    Down,
    Left,
    Right      //枚举成员
}


enum Color {Red, Green, Blue}
;
let c:Color = Color.Green;

//默认从 0 开始

enum Color {Red = 1, Green, Blue}
;
let c:Color = Color.Green;

enum Color {Red = 1, Green = 2, Blue = 4}
;
let c:Color = Color.Green;

enum Color {Red = 1, Green, Blue}
;
let colorName:string = Color[2];

alert(colorName);