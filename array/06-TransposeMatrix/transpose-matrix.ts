export function transposeMatrix(matrix: number[][]) {
  
    const transposedMatrix: number[][] = [];
    const rows = matrix.length;
    const cols = matrix[0].length;
  
    for(let col = 0; col < cols; col++) {
          
        const newRow: number[] = [];
        for(let row = 0; row < rows; row++) {
               newRow.push(matrix[row][col]);
        }
        transposedMatrix.push(newRow);
      }
      return transposedMatrix;
  }
  