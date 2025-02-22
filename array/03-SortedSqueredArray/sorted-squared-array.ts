export function sortedSquaredArray(array: number[]) {
    
    const result: number[] = [];
    let minIndex = 0;
    let maxIndex = array.length - 1;

    for (let i = maxIndex; i >= 0; i--) {

        if (Math.abs(array[minIndex]) > array[maxIndex]) {
            result[i] = Math.pow(array[minIndex], 2);
            minIndex += 1;
        }
        else {
            result[i] = Math.pow(array[maxIndex], 2);
            maxIndex -= 1;
        }
    }
    return result;
}


