// 在 TypeScript 中 , 可以使用null 和 undefined 来定义这两个原始数据类型bundleRenderer.renderToStream

// let u:undefined = undefined; 

// let n:null = null;

// undefind 和 null 是所有类型的子类型. 

// 这样不会报错
// let num:number = undefined; 

// //这样也不会报错 
// let u : undefined ; 
// let num:number  = u;



// 而 void 类型的变量不能赋值给 number 类型的变量: 

let u:void; 

let num:number = u;

