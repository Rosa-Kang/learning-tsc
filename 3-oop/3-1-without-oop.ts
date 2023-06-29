/**
 * Imperative & Procedural Programming 절차지향적 프그래밍
 * 단점: 하나를 수정하기 위해서는 전체를 이해해야 함.
 * 
 * OOP
 * 징점 : 한곳에서 문제가 생기면 관련된 오브젝트만 이해하면 됨. reusability, productivity, faster 
 * Error, Exception, Event 도 Object 로 구현할 수 있음.
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
