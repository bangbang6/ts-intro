//1.基础类型
var isDone = false;
var age = 123;
//any 表示任何基本类型都可以 而可以改变
var notSure = 3;
notSure = "may be " + age;
/* notSure.myName(); */
//unoin类型 多个中的一个
var a = "123";
a = 123;
//2.数组定义
var arr = [1, 2, 3];
/* let htmlColection:HTMLCollection //是一个定义的接口类型 */
//turple 元组即限制类型的数组
var user = ["bang", 1];
var arr1 = [12, 3, "kkk"];
//接口定义是分号，具体对象是逗号
var bang = {
    id: 123,
    name: "bang",
    age: 20
};
//4.函数 函数和对象和数组都不能写宽泛的obj,arr,function obj要写接口 数组要 number[] 函数要(x:number,y:number)=>number
function add(x, y) {
    return x + y;
}
//add1也有类型 不是function 而是 要写具体的 (x:number,y:number)=>number 类型 这个是一个具体的函数类型
var add1 = function (x, y) {
    return x + y;
};
//冒号后面的一定是类型 不是逻辑
var add2 = add1;
//5.类
var Cat = /** @class */ (function () {
    function Cat() {
    }
    Cat.categores = 'cat';
    return Cat;
}());
console.log(Cat.categores);
var car = /** @class */ (function () {
    function car() {
    }
    car.prototype.switchRadio = function (trigger) {
    };
    return car;
}());
var CellPhone = /** @class */ (function () {
    function CellPhone() {
    }
    CellPhone.prototype.switchRadio = function () {
    };
    CellPhone.prototype.checkStatus = function () {
        return true;
    };
    return CellPhone;
}());
//6.enum index到up映射 也有up -> 0的双向映射
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
console.log(Direction[0]);
