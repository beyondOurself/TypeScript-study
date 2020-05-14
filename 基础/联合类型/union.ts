//联合类型（Union Types）表示取值可以为多种类型中的一种。

let myFavoriteNumber: string | number ;

myFavoriteNumberDuct = "seven"; 
myFavoriteNumberDuct  = 7 ;

//当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法：
function getLength(something: string | number): number {
    return something.length;
}

// 访问 string 和 number 的共有属性是没有问题的: 

function getString(something: string | number) : string {

     return someThing.toString();

}

//联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型

let myFavoriteNumber: string | number;
myFavoriteNumber = 'seven';
console.log(myFavoriteNumber.length); // 5
myFavoriteNumber = 7;
console.log(myFavoriteNumber.length); // 编译时报错

// index.ts(5,30): error TS2339: Property 'length' does not exist on type 'number'.