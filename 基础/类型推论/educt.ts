// 如果没有明确的指定类型, 那么TypeScript 会依照类型推论的规则推断出一个类型. 


let myFavoriteNumber = 'seven';
myFavoriteNumber = 7;

// 等价于   ==>


let myFavoriteNumberDuct : string = 'seven';
myFavoriteNumber = 7;


//如果定义的时候没有赋值, 不管之后有没有赋值,都会被推断成 any 类型 而完全不被类型检测. 


let myFavoriteNumber; 
myFavoriteNumber = 'seven'; 
myFavoriteNumberDuct = 7 ; 