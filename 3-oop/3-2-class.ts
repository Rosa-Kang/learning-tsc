
{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  }

  class CoffeeMaker {
    // BEANS_GRAM_PER_SHOT: number = 7; // memory에 낭비가 될 수 있음. 이럴 때 static을 붙여 CLASS-level 로 지정할 수 있음.
    static BEANS_GRAM_PER_SHOT: number = 7;
    coffeeBeans: number = 0; //instance(또는 object)-level
    
    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }


   makeCoffee(shots: number):CoffeeCup {
    if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) { //CLASS-level의 변수를 부를 때에는 this.이 아닌, className. 으로 부름.
      throw new Error('Not enough coffee beans!');
    }
    
    this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;

    return {
      shots,
      hasMilk: false
    }
  }
  }

  const maker = new CoffeeMaker(63);
  const maker2 = new CoffeeMaker(21);
  console.log(maker, maker2);
}
