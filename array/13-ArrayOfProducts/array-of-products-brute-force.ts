//brute-force solution
export function arrayOfProducts(input: number[]) {
   
    const output: number[] = [];
   
    for (let i = 0; i < input.length; i++) {
        let product = 1;
        for (let j = 0; j < input.length; j++) {
            if(j!= i) {
                product *= input[j];
            }
        }
        output[i] = product;
    }
    return output;
}