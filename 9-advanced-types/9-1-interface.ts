/**
 * Type Alias vs Interface
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