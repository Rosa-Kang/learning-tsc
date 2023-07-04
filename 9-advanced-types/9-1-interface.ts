/**
 * Type Alias vs Interface
 * Type : 어떤 것을 구현하는 것 보다는 데이터를 정의하는 목적일 때에는 타입을 쓰고
 * Interface : 는 어떤 방식이나 규격을 정의해서 클래스에서 구현할 때에 쓰는 것이 적합하다.
 * 
 */

type PositionType = {
    x: number;
    y: number;
}

interface PositionInterface {
x: number;
    y: number;
}

//Object
const obj1: PositionType = {
    x: 1,
    y: 1,
}

const obj2: PositionInterface = {
    x: 1,
    y: 1,
}

//class
class Pos1 implements PositionType {
    x: number;
    y: number;
}

class Pos2 implements PositionInterface {
    x: number;
    y: number;
}

//extends
interface ZPositionInterface extends PositionInterface {
    z: number;
}

type ZPositionType = PositionType & { z: number };

// Only Interfaces can be merged.
interface PositionInterface {
    z: number;
}

// type PositionType { // error : duplicate identifier
//     z: number
// }

//Type aliases can use computed properties.
type Person = {
    name: string,
    age: number,
}

type Name = Person['name'];