
// 任意值 (Any) 用来表示允许赋值为任意类型. 

let myFavoriteNumber : any = 'seven';

myFavoriteNumber = 7 ;

// 在任意值上访问任何属性都是允许的
//声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值
let anyThing : any = 'hello'; 
console.log(anyThing.myName);
console.log(anyThing.myName.firstName);

// 变量如果在声明的时候, 未指定其类型, 那么它会被识别为任意类型.

let someThing;

someThing = 'seven'; 
someThing = 7 ; 

someThing.setName('Tom');