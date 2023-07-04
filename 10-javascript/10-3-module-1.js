/**
 * Module : file 안에 코드를 모듈화 해서 작성하는 것/ 코드는 그 모듈파일 안에서만 접근할 수 있도록하는 것. (export / import를 사용할 때에만 접근가능)
 * 여러가지의 파일들이 모듈화되어있지 않으면 파일안의 모든 코드들은 global scope로 저장되어짐. 브라우저 환경이라면 윈도우에 노드환경이라면 글로벌에 모두 등록되어짐. 각각의 파일에 같은 이름의 함수가 작성되어 있거나 라이브러리에 같은 이름이 있으면 충돌이 일어남. 
 * <script type="module" src="10-3-module-1.js"></script> 이렇게 타입을 모듈로 지정함으로써 사용 가능
 * export default에서 default는 한 모듈 안에 한 가지 함수만 있을 때 사용가능.
 * 이름충돌을 방지, 코드 재사용성 높임!!
 */



// function add(a, b) {
//     return a + b;
// }

// export default add;

export function add(a, b) {
    return a + b;
}

export const number = 10;
export function print() {
    console.log('print');
}

