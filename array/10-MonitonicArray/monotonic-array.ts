
export function isMonotonic(array: number[]) {
    // Write your code here.
    if (array == null || array.length <= 1)
        return true;
  
    const isNotIncreasing = array[0] <= array[array.length - 1];
    const comparator: (a: number, b: number) => boolean = isNotIncreasing
        ? (a, b) => a <= b
        : (a, b) => a >= b;

    for (let i = 0; i < array.length - 1; i++) {

        if (!comparator(array[i], array[i + 1])) {
            return false;
        }
    }
    return true;
}

const array =  [-1, -5, -10, -1100, -1100, -1101, -1102, -9001]
const result =isMonotonic(array);
console.assert(result);
