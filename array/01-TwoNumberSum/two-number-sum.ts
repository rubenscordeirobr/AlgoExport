// copilot: disable

export function twoNumberSum(array: number[], targetSum: number) {
    // Write your code here.
    array.sort((a, b) => a - b);
    
    let left = 0;
    let right = array.length - 1;
  
    while( left < right) {
  
       let temp = array[left] +  array[right];
  
      if(temp === targetSum) 
          return [array[left], array[right]];
  
      if(temp < targetSum)
          left += 1;
  
      if(temp > targetSum)
         right -= 1;
      
    }
    return[];
  }
  