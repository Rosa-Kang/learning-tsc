{
  /**
   * Type Assertions 💩
   */

  function jsStrFunc(): any {
    return 'hello';
  }

  const result = jsStrFunc();
  console.log((result as string).length);
  console.log((<string>result).length);

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // 😱


  function findNumbers(): number[] | undefined {
    return undefined;
  }

  
  const numbers = findNumbers();
  numbers!.push(2); // 😱 !를 사용해 장담한다! 라고 타입을 강력히 주장.

  const button = document.querySelector('class')!;
}
