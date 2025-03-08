
export function longestPeak(array: number[]) {

    let longestLength = 0;
    let i = 1;
    let len = array.length - 1;
    while (i < len) {

        const isPeak = array[i] > array[i - 1] && array[i] > array[i + 1];
        if (!isPeak) {
            i++;
            continue;
        }

        let left = i - 1;
        while (left >= 0 && array[left - 1] < array[left]) {
            left--;
        }

        let right = i + 1;
        while (right < len && array[right + 1] < array[right]) {
            right++;
        }

        let length = right - left + 1;
        if (length > longestLength) {
            longestLength = length;
        }
        i = right;

    }
    return longestLength;
}
