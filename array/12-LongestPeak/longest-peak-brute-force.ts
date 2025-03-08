//brute force approach

export function longestPeak(array: number[]) {

    const idxPeaks: number[] = [];
    for (let i = 1; i < array.length - 1; i++) {
        const isPeak = array[i] > array[i - 1] && array[i] > array[i + 1];
        if (isPeak) {
            idxPeaks.push(i);
        }
    }

    let longestLength = 0;
    for (let peak of idxPeaks) {

        const length = getPeakLength(array, peak);
        if (length> longestLength) {
            longestLength = length;
        }
    }
    return longestLength;
}

function getPeakLength(array: number[], idxPeak: number): number {

    let leftIdx = getLeft(array, idxPeak);
    let rightIdx = getRight(array, idxPeak);
    return rightIdx - leftIdx + 1;
}

function getLeft(array: number[], idxPeak: number): number {
    for (let i = idxPeak - 1; i > 0; i--) {
        if (array[i - 1] >= array[i]) {
            return i;
        }
    }
    return 0;
}

function getRight(array: number[], idxPeak: number): number {
    for (let i = idxPeak + 1; i < array.length; i++) {
        if (array[i + 1] >= array[i]) {
            return i;
        }
    }
    return array.length - 1;
}
