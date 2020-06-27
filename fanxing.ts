function eco(arg:any):any{
    return arg
}

const res = eco(111)


//泛型解决any问题 使得返回的类型不是any这种类型 而是一个确定的类型
function ecoh<T>(arg:T):T{
    return arg
}

const res1 = ecoh(1)

function swap<T,U>(turple:[T,U]):[U,T]{
    return [turple[1],turple[0]]
}

let res2 = swap([12,'23'])
/* res2[0].concat可以提示用字符串的函数 */


function ecoWithArr<T>(arg:T[]):T[] {
    console.log(arg.length) //由于不知道泛型T的类型所以可能不会有length所有编译会报错 加入T[] 这时候传入字符串‘111’会报错因为他不能表示成T[]，约束泛型就来啦
    return arg
}

//约束泛型来表示必须有length这个方法 采用接口强行约束他Length不管是字符串还是数组
interface IWithLength {
    length:number
}

function echWithLength<T extends IWithLength>(arg:T):T{
    console.log(arg.length)
    return arg
}

echWithLength({length:10,id:1}) //这里只要有length属性即可 不需要一定是数组等对象 只要你叫起来像鸭子就是鸭子去约束你

//泛型类/接口
class Queue<T> {
    private data = []
    push(item:T){
        return this.data.push(item)
    }
    pop() :T{
        return this.data.shift()
    }
}
let q = new Queue<number>()
q.push(1)
//q.push('123');报错
/* interface point {
    x:number;
    y:number
}

let x1:point = {
    x:1,
    y:2
} */

interface keyPair<T,U>{
    key:T;
    value:U
}

let kp1:keyPair<number,string> = {key:1,value:'111'}

//使用函数Interface 来定义一个函数类型表示参数是数字返回数字
interface IPlus {
    (a:number,n:number):number
}

let a1:IPlus = function(a:number,b:number):number{
    return a+b
}

//type aliases

type NameResolver = ()=>string
type nameOrResolver = string | NameResolver

function getName(n:nameOrResolver):string{
    if(typeof n === 'string') return n
    else return n()
}

//type assertion 

function getLength(input:string|number):number{
  /*   input.length//访问不了因为string没有length */
  let str = input as String  //断言成string类型
    //浙石化就有length 表示编辑器我知道我有length不需要你给我提示报错
  if(str.length){
    return str.length
  }else{
      let n = input as number //能进来肯定只能是number我就断言为number
      return n
  }
}


//使用第三方库这时候的类型就要引入他的类型文件才能正确定义类型
//声明JQuery的类型，这时候再去引入jquery和使用jqueryapi才行
//直接用jqyery第三方声明文件粘贴来 省的自己一个一个写 直接npm 后就能用JQuery
/* declare var jQuery:(selctor:string)=>any */
jQuery('#foo')

