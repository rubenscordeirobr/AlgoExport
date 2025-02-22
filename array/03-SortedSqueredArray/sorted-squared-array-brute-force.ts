export function sortedSquaredArray(array: number[]) {
    // Write your code here.
    return array.map(x=> Math.pow(x, 2)).sort((a, b) => a- b);
  }
  