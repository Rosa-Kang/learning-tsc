/**
 * encapsulation : private, public, protected 등을 활용해 정보를 외부에 노출시킬 지 말지 정의할 수 있음.
 * public, private, protected - levels
 * 따로 작성하지 않으면 모두 public
 */
{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  }


  class CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;
    
    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker{
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('Value for beans should be greater than zero.')
      }
      this.coffeeBeans += beans;
    }

   makeCoffee(shots: number):CoffeeCup {
    if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) { 
      throw new Error('Not enough coffee beans!');
    }
    
    this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;

    return {
      shots,
      hasMilk: false
    }
  }
  }

  const maker = CoffeeMaker.makeMachine(63);
  maker.fillCoffeeBeans(32);
  console.log(maker);
}
