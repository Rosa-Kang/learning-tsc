/**
 * Type Inference 타입추론**
 */
let text = 'hello';

text = 11;

function print(message = 'hello') {
  console.log(message);
}
print('hello');

function add(x: number, y: number): number {
  return x + y;
}
const result = add(1, 2);


