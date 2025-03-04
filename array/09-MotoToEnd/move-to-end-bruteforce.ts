// copilot: disable

export function moveElementToEnd(array: number[], toMove: number) {

    //brute force
    const newArray: number[] = [];
    let removedCount = 0;

    for (let i = 0; i < array.length; i++) {

        if (array[i] == toMove) {
            removedCount++;
        }
        else {
            newArray.push(array[i]);
        }
    }

    for (let i = 0; i < removedCount; i++) {
        newArray.push(toMove);
    }

    return newArray;
}

const array = [2, 1, 2, 2, 2, 3, 4, 2];
const toMove = 2;
console.log(moveElementToEnd(array, toMove)); // [1, 3, 4, 2, 2, 2, 2, 2]