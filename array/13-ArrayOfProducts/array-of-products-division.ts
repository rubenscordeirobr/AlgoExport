export function arrayOfProducts(input: number[]) {

    const output: number[] = [];
    let countZero = 0;
    let product = input.reduce((a, b) => {
        if (a == 0) {
            countZero++;
            a = 1;
        }
        return a * b
    });

    if (countZero > 0) {
        if (countZero == 1) {
            return input.map(x => x == 0 ? product : 0);
        }
        return input.map(x => 0);
    }

    for (let i = 0; i < input.length; i++) {
        output[i] = product / input[i];
    }
    return output;
}
 