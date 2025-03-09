export function arrayOfProducts(input: number[]): number[] {

    const output: number[] = [];
    const leftArray: number[] = []
    const rightArray: number[] = []

    let right = input.length - 2;
    let left = 1;

    leftArray[0] = 1;
    rightArray[input.length - 1] = 1
 
    while ((left < input.length) && (right >= 0)) {

        leftArray[left] = leftArray[left - 1] * input[left - 1];
        rightArray[right] = rightArray[right + 1] * input[right + 1];
        left++;
        right--;
    }

    for (let i = 0; i < input.length; i++) {
        output[i] = leftArray[i] * rightArray[i];
    }

    return output;
}
 