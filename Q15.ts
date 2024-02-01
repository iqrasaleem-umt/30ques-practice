//q15 Write a function that checks if all elements in an array are positive using the every method.
function areAllPositive(numbers: number[]): boolean {
    return numbers.every((num) => num > 0);
  }
