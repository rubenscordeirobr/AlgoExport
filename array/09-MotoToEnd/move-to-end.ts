// copilot: disable

export function moveElementToEnd(array: number[], toMove: number) {

    let leftIndex = 0;
    let rightIndex = array.length - 1;
    while (leftIndex < rightIndex) {

        if (array[rightIndex] == toMove) {
            rightIndex--;
        }
        else {
            if (array[leftIndex] == toMove) {
                const temp = array[rightIndex];
                array[leftIndex] = temp;
                array[rightIndex] = toMove;
            }
            leftIndex++;
        }
    }
    return array;
}

const array = [2, 1, 2, 2, 2, 3, 4, 2];
const toMove = 2;
const result = moveElementToEnd(array, toMove)
console.log(result); // [1, 3, 4, 2, 2, 2, 2, 2]