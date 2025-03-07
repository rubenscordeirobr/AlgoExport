// copilot: disable

export function spiralTraverse(array: number[][]) {

    const result: number[] = [];
    let rows = array.length;
    let cols = array[0].length;
    const len = rows * cols;

    let direction = Direction.LeftToRight; //leftToRight

    let currentRow = 0;
    let currentCol = 0;
    let startLimitRow = 1;
    let startLimitCol = 0;
    let endLimitRow = rows - 1;
    let endLimitCol = cols - 1;

    for (let i = 0; i < len; i++) {

        result[i] = array[currentRow][currentCol];

        if (direction == Direction.LeftToRight) {

            if (currentCol == endLimitCol) {
                endLimitCol--;
                direction = Direction.TopToDown;
            }
            else {
                currentCol++;
            }
        }

        if (direction == Direction.TopToDown) {

            if (currentRow == endLimitRow) {
                endLimitRow--;
                direction = Direction.RightToLeft;
            }
            else {
                currentRow++;
            }
        }

        if (direction == Direction.RightToLeft) {

            if (currentCol == startLimitCol) {
                startLimitCol++;
                direction = Direction.DownToTop
            }
            else {
                currentCol--;
            }
        }

        if (direction == Direction.DownToTop) {

            if (currentRow == startLimitRow) {
                startLimitRow++;
                direction = Direction.LeftToRight;
                currentCol++;
            }
            else {
                currentRow--;
            }
        }
    }
    return result;
}

const Direction = {
    LeftToRight: 0,
    TopToDown: 1,
    RightToLeft: 2,
    DownToTop: 3
}

const array = [
    [1, 2, 3, 4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10, 9, 8, 7],
]

console.log(spiralTraverse(array)) // [1,2,3,4,6,7,8,9,10,11,12,13,14,15,16 ]A