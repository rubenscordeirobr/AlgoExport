type Triplet = [number, number, number];

export function threeNumberSum(array: number[], targetSum: number): Triplet[] {
 
    if (array.length < 3) {
        return [];
    }

    const sortedArray = array.sort((a, b) => a - b);
    const triplets: Triplet[] = [];
 
    let currentIndex = 0;
    while ( currentIndex  < sortedArray.length - 2) {

        let innerLeft = currentIndex + 1;
        let innerRight = sortedArray.length - 1;

        while (innerLeft < innerRight) {

            const sum = sortedArray[currentIndex] + sortedArray[innerLeft] + sortedArray[innerRight];

            if(sum == targetSum){
                triplets.push([sortedArray[currentIndex], sortedArray[innerLeft], sortedArray[innerRight]]);   
                innerLeft++;
                innerRight--;
            }

            if(sum < targetSum){
                innerLeft++;
            }

            if(sum > targetSum){
                innerRight--;
            }
        }
    
        currentIndex++;
    }

    return triplets;
}


//tests
const result1 = threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0); // [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]
const result2 = threeNumberSum([1, 2, 3], 6); // [[1, 2, 3]]

