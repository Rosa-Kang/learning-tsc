{
    const obj = {
        name: 'ellie',
    };

    obj.name
    obj['name']

    type Animal = {
        name: string;
        age: number;
        gender: 'male' | 'female';
    }

    type Name = Animal['name'] //string
    const text: Name = 'hello'

    type Gender = Animal['gender'] //'male' | 'female'

    type Keys = keyof Animal; //'name' | 'age' | 'gender'
    const key: Keys = 'age'; // Animal 에 있는 keys들 중 하나만 할당 가능

    type Person = {
        name: string;
        gender: Animal['gender'];
    };

    const person: Person = {
        name: 'ellie',
        gender: 'female'
    }


}