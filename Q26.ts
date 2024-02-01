//Q26 Write a function that uses rest parameters to calculate the sum of an arbitrary number of arguments. This allows flexibility in the number of arguments.

function sumNumbers(...numbers: number[]): number {
    return numbers.reduce((sum, num) => sum + num, 0);
  }
  
  // Example usage
  const result = sumNumbers(1, 2, 3, 4);