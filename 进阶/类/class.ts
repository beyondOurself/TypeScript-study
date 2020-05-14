
// 属性和方法

class Animal {

    static isAnimal(a) {
        return a instanceof Animal;
    }

    // public name ; 
    private name;
    public constructor(name) {
        this.name = name;
    }

    sayHi() {
        return `My name is ${this.name}`;
    }

    get name() {

        return 'Jack';
    }

    set name(value) {

        console.log('setter : ' + value);
    }
}

let a = new Animal('Jack');
console.log(a.sayHi());


Animal.isAnimal(a);


let b = new Animal('Kitty');
a.name = 'Tom'; // setter : Tom
console.log(a.name); // Jack


// 类的继承

class Cat extends Animal {

    constructor(name) {
        super(name);  // 调用父类的 constructor (name)
        console.log(this.name);
    }

    sayHi() {

        return ' Meow, ' + super.sayHi(); //调用父类的sayHi()
    }

}

let c = new Cat('Tom'); // Tom
console.log(c.sayHi()); // Mew, My name is Tom


// 参数属性 
class Animal2 {
    readonly name;
    public constructor(name) {
        this.name = name;
    }
}

// let c = new Animal2('Jack');
// console.log(c.name); // Jack
// c.name = 'Tom';

class Animal3 {

    public constructor(public readonly name) {

    }
}

// 抽象类

abstract class Animal5 {

    constructor(public name) {

    }

    abstract sayHi();
}


// let aa = new Animal5('Jack');

class Cat2 extends Animal5 {

    public eat(){
         console.log( `${this.name} is eating.`);
         
    }

    public sayHi(){

        console.log(`Meow , My name is  ${this.name}`);
    }
}

let ca2t = new Cat2('Tom');
