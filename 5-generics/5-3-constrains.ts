/**
 * Constrain을 활용해 타입을 generic하게 할 수 있음.
 * function getValue<T, K extends keyof T>(a:T, b:K):T[K] {
    return a[b];
}
 * 
 */

interface Employee {
    pay(): void;

}

class FullTimeEmployee implements Employee{
    pay() {
        console.log(`full Time !!`);
    }
    workFullTime() {}
}

class PartTimeEmployee implements Employee {
    pay() {
        console.log(`part Time!!`);
    }
    workPartTime() {}
}

//세부타입을 인자로 받아서 추상적인 타입으로 리턴하는 함수는 좋지X 🙅🏼‍♀️
function payBad(employee: Employee) {
    employee.pay();
    return employee;
}

function pay<T extends Employee>(employee:T):T { //Generic Constrain
    employee.pay()
    return employee;
}

// const ellie = new FullTimeEmployee();
// const bob = new PartTimeEmployee();

// const ellieAfterPay = pay(ellie);
// const bobAfterPay = pay(bob);


const obj = {
    name:'ellie',
    age: 20,
}

const obj2 = {
    animal: `🐈`,
}

function getValue<T, K extends keyof T>(a:T, b:K):T[K] {
    return a[b];
}

console.log(getValue(obj, 'name'));
console.log(getValue(obj2, 'animal'));