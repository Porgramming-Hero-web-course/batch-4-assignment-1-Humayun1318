{
  //Problem-1
  //Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

  function sumArray(numbersArray: number[]): number {
    return numbersArray.reduce((sum, num) => sum + num, 0);
  }

  // Sample Input:
  // console.log(sumArray([1, 2, 3, 4, 5]));

  //
}