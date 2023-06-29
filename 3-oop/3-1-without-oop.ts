/**
 * Imperative & Procedural Programming 절차지향적 프그래밍
 * 단점: 하나를 수정하기 위해서는 전체를 이해해야 함. 유지보수, 확장이 힘듦.
 * 
 * OOP
 * 징점 : 서로 관련있는 함수와 테이터들을 하나의 객체로 디자인. 한곳에서 문제가 생기면 관련된 오브젝트만 이해, 수정하면 됨. 반복되는 객체는 재사용, 확장할 수 있음. reusability, productivity, faster 
 * Error, Exception, Event 도 Object 로 구현할 수 있음.
 * 
 * CLASS
 * object의 생김새를 정의하는 객체.
 * Object는 CLASS라는 청사진을 활용해 만들어진 instance.
 * 
 * OOP의 4가지 원칙
 * Encapsulation(캡슐화)- 관련있는 데이터와 함수들을 한 Object안에 담아두고 외부에서 볼 필요없는 데이터를 잘 숨겨두는 과정.
 * Abstraction(추상성)- 내부의 복잡한 기능을 다 이해하지 않고, 외부의 인터페이스를 통해 활용. 이처럼 추상화를 통해 외부에서 보이는 함수를 이용해 Object를 이용
 * Inheritance(상속)- 잘 정의된 CLASS(데이터와 함수): parent, super, base --> child, sub, derive 를 그대로 상속해 와서 재사용 할 수 있음.
 * Polymorphism(다양성)- 
 * 
 */


{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  const BEANS_GRAMM_PER_SHOT: number = 7;

  let coffeeBeans: number = 0;
  function makeCoffee(shots: number): CoffeeCup {
    if (coffeeBeans < shots * BEANS_GRAMM_PER_SHOT) {
      throw new Error('Not enough coffee beans!');
    }
    coffeeBeans -= shots * BEANS_GRAMM_PER_SHOT;
    return {
      shots,
      hasMilk: false,
    };
  }

  coffeeBeans += 3 * BEANS_GRAMM_PER_SHOT;
  const coffee = makeCoffee(2);
  console.log(coffee);
}
