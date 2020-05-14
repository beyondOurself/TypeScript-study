// 属性和方法
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.isAnimal = function (a) {
        return a instanceof Animal;
    };
    Animal.prototype.sayHi = function () {
        return "My name is " + this.name;
    };
    Object.defineProperty(Animal.prototype, "name", {
        get: function () {
            return 'Jack';
        },
        set: function (value) {
            console.log('setter : ' + value);
        },
        enumerable: true,
        configurable: true
    });
    return Animal;
}());
var a = new Animal('Jack');
console.log(a.sayHi());
Animal.isAnimal(a);
var b = new Animal('Kitty');
a.name = 'Tom'; // setter : Tom
console.log(a.name); // Jack
// 类的继承
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        var _this = _super.call(this, name) || this;
        console.log(_this.name);
        return _this;
    }
    Cat.prototype.sayHi = function () {
        return ' Meow, ' + _super.prototype.sayHi.call(this); //调用父类的sayHi()
    };
    return Cat;
}(Animal));
var c = new Cat('Tom'); // Tom
console.log(c.sayHi()); // Mew, My name is Tom
// 参数属性 
var Animal2 = /** @class */ (function () {
    function Animal2(name) {
        this.name = name;
    }
    return Animal2;
}());
// let c = new Animal2('Jack');
// console.log(c.name); // Jack
// c.name = 'Tom';
var Animal3 = /** @class */ (function () {
    function Animal3(name) {
        this.name = name;
    }
    return Animal3;
}());
// 抽象类
var Animal5 = /** @class */ (function () {
    function Animal5(name) {
        this.name = name;
    }
    return Animal5;
}());
// let aa = new Animal5('Jack');
var Cat2 = /** @class */ (function (_super) {
    __extends(Cat2, _super);
    function Cat2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat2.prototype.eat = function () {
        console.log(this.name + " is eating.");
    };
    Cat2.prototype.sayHi = function () {
        console.log("Meow , My name is  " + this.name);
    };
    return Cat2;
}(Animal5));
var ca2t = new Cat2('Tom');
