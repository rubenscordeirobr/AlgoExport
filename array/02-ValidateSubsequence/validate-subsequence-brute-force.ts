// copilot: disable
export function isValidSubsequence(array: number[], sequence: number[]) {
    // Write your code here.
    let indexCount = 0;
    const len = sequence.length;
    if(len > 0) {
      
       for(const item of array) {
  
         if(item === sequence[0])
              sequence.shift();
       }  
       return sequence.length === 0;
    }
    return false;
  }
  