function bucketSort(array, max, min) {
    if (array.length <= 1) {
        return array;
    }

    let bucket = [];
    bucket.length = max - min + 1;
    for(let i = 0; i < bucket.length; i++) {
        bucket[i] = [];
    }

    for (let i = 0; i < array.length; i++) {
        let current = bucket[array[i] - min];
        current.push(array[i]);
    }
    bucket = bucket.flat()
    return bucket;
}

console.log(bucketSort([17, 9, 3, 2, 14, 4, 5, 7, 0, 33, 1, 3, 11, 23, 17, 11, 4, 5, 3], 33, 0));