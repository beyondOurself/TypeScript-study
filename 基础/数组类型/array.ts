//在 TypeScript 中，数组类型有多种定义方式，比较灵活。

let fibonacci:number[] = [1,2,3,4,5,6];

//数组的项中不允许出现其他的类型：
let fibonacci: number[] = [1, '1', 2, 3, 5];

//数组的一些方法的参数也会根据数组在定义时约定的类型进行限制：

let fibonacci: number[] = [1, 1, 2, 3, 5];
fibonacci.push('8');

//  用接口表示数组 

interface NumberArray{
    [index:number] : number; 
}

let fibonacci: NumberArray = [1,1,2,5,5,5,9]; 

// 类数组
//arguments 实际上是一个类数组，不能用普通的数组的方式来描述，而应该用接口：


// function sum() {
//     let args: {
//         [index: number]: number;
//         length: number;
//         callee: Function;
//     } = arguments;
// }

// 事实上常用的类数组都有自己的接口定义，如 IArguments, NodeList, HTMLCollection

function sum() {
    let args: IArguments = arguments;
}

// any 在数组中的应用

let list:any[] = ['xcatliu',25,{website:'http://xcatliu.com'}]

