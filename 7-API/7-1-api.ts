Array;

type Student = {
    passed: boolean;
}

const students: Student[] = [{ passed: true }, { passed: true }, { passed: false }];
const result = students.every(s => {
    return s.passed;
});

class Animal { }
class Cat extends Animal {
    isCat: boolean = true;
}

class Dog extends Animal {
    isDog: boolean = false;
}

const animals: Animal[] = [new Cat(), new Cat(), new Cat()];
function isCat(animal: Animal): animal is Cat {
    return (animal as Cat).isCat !== undefined;
}

const result2 = animals.every<Cat>(isCat);
console.log(result2);


//  every<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): this is S[];
