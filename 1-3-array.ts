
// {
//   //Array
//   const fruits: string[] = ['🍐', '🍊']; /**great**/
//   const scores: Array<number> = [1, 2, 3, 4];

//   function printArray(fruits: readonly string[]) {
//     fruits.push //readonly 일 때는 데이터를 변경할 수 X
//   }

// // Tuple -> interface, type alias, class 를 대신 사용
//   let student: [string, number];
// // 배열안에 첫 번째 타입과 두 번째 타입이 다름. 리엑트에서 쓰이는 것과 같이 디스트럭쳐링의 형태로 사용 가능하지만, 그 외 경우에는 인터페이스, 타입 앨리어스를 이용하는 것이 좋음.
//     const[count, setCount] = useState(0); //example in react
// }