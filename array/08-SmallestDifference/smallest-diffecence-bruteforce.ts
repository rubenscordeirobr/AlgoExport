
// copilot: disable

export function smallestDifference(arrayOne: number[], arrayTwo: number[]) {
  
    let smallestDifference = Number.MAX_SAFE_INTEGER;
    let result: number[] = [];

    for(const num1 of arrayOne) {
      
        for(const num2 of arrayTwo){
            const difference = Math.abs( num1 - num2);
            if(difference < smallestDifference){
                smallestDifference = difference;
                result = [num1, num2]
            }
        }
    }
    return result;
  }
  