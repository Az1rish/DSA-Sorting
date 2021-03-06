function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function bucketSort(arr, max, min) {
    let tick = 0;
    for (let i = 1; i < arr.length - 1; i++) {
        if (arr[i] === min) { 
            swap(arr, i, 0);
            // tick++;
            // i--;
        } else if (arr[i] === max) {
            swap(arr, i, arr.length - 1);
            // tick++;
        }
        if (arr[i] < arr[i - 1]) {
            swap(arr, i, i - 1);
            i = i - 2;
            // tick++;
        }
        tick++;
    }
    console.log('tick', tick);
    return arr;
}

// console.log(bucketSort([7, 9, 4, 1, 3, 11, 23], 23, 1));
console.log(bucketSort([17, 9, 3, 2, 14, 4, 5, 7, 0, 33, 1, 3, 11, 23], 33, 0));

function swap(array, i, j) {
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
};

function bubbleSort(array, ticks = 0) {
    let swaps = 0;
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            swap(array, i, i + 1);
            swaps++;
        }
        ticks++;
    }

    if (swaps > 0) {
        return bubbleSort(array, ticks);
    }
    return { array, ticks };
};

// console.log(bubbleSort([17, 9, 3, 2, 14, 4, 5, 7, 0, 33, 1, 3, 11, 23]));