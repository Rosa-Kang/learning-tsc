/**
 * TS is superset of JavaScript
 * Prototype : 상속을 위해 쓰이는 것. Inheritance
 * 반복적으로 쓰일 수 있도록  
 */

const x = {};
const y = {};

// console.log(x.__proto__ === y.__proto__);

const array = [];
// console.log(array);


function CoffeeMachine(beans) {
    this.beans = beans;
    // this.makeCoffee = shots => {
    //     console.log(`making.... ☕️`)
    // }
}

//Prototype member level
CoffeeMachine.prototype.makeCoffee = (shots) => {
    console.log(`making...☕️ ${shots}`);
}

// const machine1 = new CoffeeMachine(10);
// const machine2 = new CoffeeMachine(20);
// console.log(machine1, machine2);

function LatteMachine(milk) {
    this.milk = milk;
}

LatteMachine.prototype = Object.create(CoffeeMachine).prototype;

const latteMachine = new LatteMachine(123);
// console.log(latteMachine);
latteMachine.makeCoffee(365);
