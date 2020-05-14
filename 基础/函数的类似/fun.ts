// 一个函数有输入和输出，要在 TypeScript 中对其进行约束，需要把输入和输出都考虑到，其中函数声明的类型定义较简单：
function sum(x: number, y: number): number {
    return x + y;
}

//输入多余的（或者少于要求的）参数，是不被允许的：

function sum(x: number, y: number): number {
    return x + y;
}
sum(1, 2, 3);


function sum(x: number, y: number): number {
    return x + y;
}
sum(1);

//函数表达式

// 用接口定义函数的形状
// 采用函数表达式|接口定义函数的方式时，对等号左侧进行类型限制
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    return source.search(subString) !== -1;
}

// 可选参数

//与接口中的可选属性类似，我们用 ? 表示可选的参数：
function buildName(firstName: string, lastName?: string) {
    if (lastName) {
        return firstName + ' ' + lastName;
    } else {
        return firstName;
    }
}
let tomcat = buildName('Tom', 'Cat');
let tom = buildName('Tom');

//可选参数后面不允许再出现必需参数了：
function buildName(firstName?: string, lastName: string) {
    if (firstName) {
        return firstName + ' ' + lastName;
    } else {
        return lastName;
    }
}
let tomcat = buildName('Tom', 'Cat');
let tom = buildName(undefined, 'Tom');