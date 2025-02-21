 
export function isValidSubsequence(array: number[], sequence: number[])  {
    
      let indexCount = 0;
      let indexSeq = 0;
  
      while (indexSeq <= indexCount)
      {
          if (array[indexCount] === sequence[indexSeq])
          {
              indexSeq++;
          }
        
          if (indexSeq === sequence.length)
          {
              return true;
          }
          indexCount++;
  
          if(indexCount >= array.length)
          {
              break;
          }
      }
      return false;
  }