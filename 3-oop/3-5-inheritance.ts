/**
 * 상속할 때에는 Extends 라는 키워드를 사용!!
 * 상속을 할 때에는 Private 한 함수들은 상속이 되지 않으므로, 상속된 자식들에게는 노출이 가능한 Protected로 바꿔줄 것!
 * Constructor 생성자에 경우에 Private으로 되어있다면 Protected로 바꿔줘야 함.
 * super라는 키워드를 이용해 부모클래스 안에 있는 함수를 이용,접근할 수 있음.
 * 자식 클래스에서 생성자를 사용할 때에는 MUST 'super'를 반드시 호출해야하며, 부모 생성자에서 필요한 인자도 전달해 줘야한다. constructor(beans, newParam){
 *---------------------------------------  super(beans);
*--------------------------------- }
 * 
 */
{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }


  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }
      this.coffeeBeans += beans;
    }

    clean() {
      console.log('cleaning the machine...🧼');
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
    }

    private preheat(): void {
      console.log('heating up... 🔥');
    }

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots... ☕️`);
      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }


  class CafeLatteMachine extends CoffeeMachine {
      constructor(beans: number, public readonly serialNumber: string){
        super(beans);
      }
    private steamMilk(): void {
      console.log(`Steaming some milk... 🥛`);
    }

    makeCoffee(shots: number): CoffeeCup{
      const coffee = super.makeCoffee(shots); //부모에서 만든 함수를 사용할 때 super를 사용!
      this.steamMilk();

      return {
        ...coffee,
        hasMilk: true
      }
    }
  }

  const machine = new CoffeeMachine(63);
  const latteMachine = new CafeLatteMachine(21, 'ssss-01');
  const coffee = latteMachine.makeCoffee(1);

  console.log(coffee);
}
