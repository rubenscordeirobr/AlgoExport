// copilot: disable

export function sortedSquaredArray(array: number[]) {

    let left = 0;
    let right = array.length - 1;
    let index = right;

    const result: number[] = [];
    while (left <= right) {

        if (Math.abs(array[left]) > array[right]) {
            result[index] = Math.pow(array[left], 2);
            left++;
        }
        else {
            result[index] = Math.pow(array[right], 2);
            right--;
        }
        index--;
    }
    return result;
}

const array = [-5, -2, 0, 1, 3, 6];
console.log(sortedSquaredArray(array)); //[0, 1, 4, 9, 25,36]
