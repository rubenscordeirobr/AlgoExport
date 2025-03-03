
// copilot: disable

export function smallestDifference(arrayOne: number[], arrayTwo: number[]) {

    let smallestDifference = Number.MAX_SAFE_INTEGER;
    let result: number[] = [];

    arrayOne.sort((a, b) => a - b);
    arrayTwo.sort((a, b) => a - b);

    let firstIndex = 0;
    let secondeIndex = 0;

    while (firstIndex < arrayOne.length && secondeIndex < arrayTwo.length) {

        const num1 = arrayOne[firstIndex];
        const num2 = arrayTwo[secondeIndex]

        let difference = Math.abs(num1 - num2);

        if (difference < smallestDifference) {
            smallestDifference = difference;
            result = [num1, num2];
        }

        if (num1 < num2) {
            firstIndex++;
        }
        else if (num2 < num1) {
            secondeIndex++;
        }
        else {
            break;
        }
    }

    return result;


}

//test
smallestDifference([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17]);