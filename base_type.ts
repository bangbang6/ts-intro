//1.基础类型
let isDone: boolean = false;
let age: number = 123;
//any 表示任何基本类型都可以 而可以改变
let notSure: any = 3;
notSure = `may be ${age}`;

/* notSure.myName(); */
//unoin类型 多个中的一个
let a: number | string = "123";
a = 123;

//2.数组定义
let arr: number[] = [1, 2, 3];

/* let htmlColection:HTMLCollection //是一个定义的接口类型 */

//turple 元组即限制类型的数组

let user: [string, number] = ["bang", 1];
let arr1: any[] = [12, 3, "kkk"];


//3.以下是Object类型 主要是Interface接口定义的包括内置的接口和自己定义的接口
interface Person{
    readonly id:number;
    name:string;
    age?:number
}
//接口定义是分号，具体对象是逗号
let bang:Person = {
    id:123,
    name:"bang",
    age:20
}

//4.函数 函数和对象和数组都不能写宽泛的obj,arr,function obj要写接口 数组要 number[] 函数要(x:number,y:number)=>number

function add(x:number,y:number):number{
    return x+y
}
//add1也有类型 不是function 而是 要写具体的 (x:number,y:number)=>number 类型 这个是一个具体的函数类型
let add1 = function(x:number,y:number):number{
    return x+y
}
//冒号后面的一定是类型 不是逻辑

let add2:(x:number,y:number) => number = add1
//5.类
class Cat{
    static categores:string = 'cat'
}

console.log(Cat.categores)

//类和接口一起继承 car和phone不是同一个类但是都有改变radio的状态功能 这时候构造radio接口去继承 强行约束一起

interface Radio {
    switchRadio(trigger:boolean):void
}
interface Battery {
    checkStatus():boolean
}
//这里隐士包含啦switchRadio 同时新加checkRadioStatus函数
interface RadioAndBattery extends Radio {
    checkRadioStatus():void
}
class car implements Radio{
    switchRadio(trigger:boolean){

    }
}

class CellPhone implements Radio,Battery{
    switchRadio(){

    }
    checkStatus():boolean{
        return true
    }

}

//6.enum index到up映射 也有up -> 0的双向映射

enum Direction {
    Up="up",
    Down="w",
    Left='1',
    Right="2"
}

console.log(Direction['Up'])