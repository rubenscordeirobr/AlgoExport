export function arrayOfProducts(input: number[]): number[] {

    const output: number[] = [];

    let leftProduct = 1;
    for (let i = 0; i < input.length; i++) {
        output[i] = leftProduct;
        leftProduct *= input[i];
    }

    let rightProduct = 1;
    for (let i = input.length - 1; i >= 0; i--) {
        output[i] *= rightProduct;
        rightProduct *= input[i];
    }
    return output;
}
 