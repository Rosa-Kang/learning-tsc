/**
 * 
 * An abstract method is a class method which won’t be implemented but is expected to be implemented by the descendants of the class.
 * 1. Class에 Abstract를 붙여 추상적 클래스가 되면, object를 생성할 수 없고 new 를 사용해 instance를 만드는 것이 불가능해 짐.
 * --> cannot create an instanceof an abstract class.
 * 2. Abstract 함수는 private이 될 수 없음. ---> 'protect'로 변경하고 abstract앞에 써 줌. (l-56)
 * --> 'private' modifier cannot be used with 'abstract' modifier.ts(1243)
 * 3. Abstract 함수는 함수이름, 인자, 리턴하는 값만 정의할 수 있고, 기능은 설명하지 않음.
 */


{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  abstract class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    // static makeMachine(coffeeBeans: number): CoffeeMachine {
    //   return new CoffeeMachine(coffeeBeans);
    // } --> cannot create an instanceof an abstract class.

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
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    private preheat(): void {
      console.log('heating up... 🔥');
    }

    protected abstract extract(shots: number): CoffeeCup; //{
    //    console.log(`Pulling ${shots} shots... ☕️`);
    //    return {
    //      shots,
    //      hasMilk: false,
    //    };
    //  } //abstract 함수는 구현사항 없이 정의만 해야 함.

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  class CafeLatteMachine extends CoffeeMachine {
    constructor(beans: number, public readonly serialNumber: string) {
      super(beans);
    }
    private steamMilk(): void {
      console.log('Steaming some milk... 🥛');
    }
    
    protected extract(shots: number): CoffeeCup {
      this.steamMilk();
      return {
        shots,
        hasMilk: true,
      }
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    protected extract(shots: number): CoffeeCup { 
      return {
          shots,
          hasSugar: true,
        }
    } 
  
  }

  const machines: CoffeeMaker[] = [
    new CafeLatteMachine(16, '1'),
    new SweetCoffeeMaker(16),
    new CafeLatteMachine(16, '1'),
    new SweetCoffeeMaker(16),
  ];

  machines.forEach(machine => {
    console.log('-------------------------');
    machine.makeCoffee(1);
  });
}

