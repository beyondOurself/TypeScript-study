// 在面向对象语言中，接口（Interfaces）是一个很重要的概念，它是对行为的抽象，而具体如何行动需要由类（classes）去实现（implement）。
// TypeScript 中的接口是一个非常灵活的概念，除了可用于对类的一部分行为进行抽象以外，也常用于对「对象的形状（Shape）」进行描述。

interface Person {

    name: String;
    age: number;
}

let tom: Person = {

    name: 'Tom',
    age: 25
}

//赋值的时候，变量的形状必须和接口的形状保持一致。 


// 可选属性 

//可选属性的含义是该属性可以不存在。
interface Person {
    name: string;
    age?: number;
}

let tom: Person = {
    name: 'Tom'
};

//任意属性 :
// 有时候我们希望一个接口允许有任意的属性，可以使用如下方式：
interface Person {
    name: string;
    age?: number;
    [propName: string]: any;
}

let tom: Person = {
    name: 'Tom',
    gender: 'male'
};

//一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集：

interface Person {
    name: string;
    age?: number;
    [propName: string]: string;
}

let tom: Person = {
    name: 'Tom',
    age: 25,
    gender: 'male'
};

// index.ts(3,5): error TS2411: Property 'age' of type 'number' is not assignable to string index type 'string'.
// index.ts(7,5): error TS2322: Type '{ [x: string]: string | number; name: string; age: number; gender: string; }' is not assignable to type 'Person'.
//   Index signatures are incompatible.
//     Type 'string | number' is not assignable to type 'string'.
//       Type 'number' is not assignable to type 'string'.


// 一个接口中只能定义一个任意属性。如果接口中有多个类型的属性，则可以在任意属性中使用联合类型：

interface Person {
    name: string;
    age?: number;
    [propName: string]: string | number;
}

let tom: Person = {
    name: 'Tom',
    age: 25,
    gender: 'male'
};

//只读属性 

interface Person {

    readonly id: number;
    name: string;
    age?: number;
    [propName: String]: any;


}
let tom: Person = {
    id: 89757,
    name: 'Tom',
    gender: 'male'
};

tom.id = 9527;