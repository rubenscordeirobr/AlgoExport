export function longestPeak(array: number[]) {

    let longestPeakLength = 0;
    let idxRight = -1;
    let idxLeft = 0;
    let peakDetected = false;
 
    for (let i = 1; i < array.length; i++) {

        const value = array[i];
        const isPeak = i < array.length && value > array[i - 1] && value > array[i + 1];
        if (isPeak) {

            if (peakDetected) {
                idxLeft = i - 1;
            }

            idxRight = i + 1;
            peakDetected = true;
            i++;
            continue;
        }

        if (!peakDetected) {
            if (value < array[idxLeft] || value == array[i - 1]) {
                idxLeft = i;
            }
            continue;
        }
        else {

            if (value < array[idxRight]) {
                array[idxRight] = value;
                idxRight = i;
                continue;
            }
            else {

                //end peak
                let peakLength = idxRight - idxLeft + 1;
                if (peakLength > longestPeakLength) {
                    longestPeakLength = peakLength;
                }

                peakDetected = false;
                idxLeft = i;
            }
        }
    }
    if (peakDetected) {
        let peakLength = idxRight - idxLeft + 1;
        if (peakLength > longestPeakLength) {
            longestPeakLength = peakLength;
        }
    }
    return longestPeakLength;
}
