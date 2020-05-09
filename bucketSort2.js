function bucketSort(array, max, min) {
    let ticks = 0;
    if (array.length <= 1) {
        return array;
    }

    let bucket = [];
    bucket.length = max - min + 1;
    for(let i = 0; i < bucket.length; i++) {
        ticks++;
        bucket[i] = [];
    }

    for (let i = 0; i < array.length; i++) {
        ticks++;
        let current = bucket[array[i] - min];
        current.push(array[i]);
    }
    bucket = bucket.flat()
    console.log('ticks', ticks);
    return bucket;
}

console.log(bucketSort([17, 9, 3, 2, 14, 4, 5, 7, 0, 33, 1, 3, 11, 23, 17, 11, 4, 5, 3], 33, 0));

// InsertionSort to be used within bucket sort
function insertionSort(array, ticks) {
    var length = array.length;
    
    for(var i = 1; i < length; i++) {
        ticks++;
      var temp = array[i];
      for(var j = i - 1; j >= 0 && array[j] > temp; j--) {
        array[j+1] = array[j];
      }
      array[j+1] = temp;
    }
    
    return array;
  }
  
  // Implement bucket sort
  function bucketSort2(array, max, min) {
      let ticks = 0;
    if (array.length === 0) {
      return array;
    }
  
    // Declaring vars
    var i,
        bucketSize = bucketSize || 5;
  
    // Initializing buckets
    var bucketCount = Math.floor((max - min) / bucketSize) + 1;
    var allBuckets = new Array(bucketCount);
    
    for (i = 0; i < allBuckets.length; i++) {
      allBuckets[i] = [];
      ticks++;
    }
    
    // Pushing values to buckets
    array.forEach(function (currentVal) {
        ticks++;
        allBuckets[Math.floor((currentVal - min) / bucketSize)].push(currentVal);
    });
  
    // Sorting buckets
    array.length = 0;
    
    allBuckets.forEach(function(bucket) {
        ticks++;
        insertionSort(bucket, ticks);
        bucket.forEach(function (element) {
            ticks++;
            array.push(element)
        });
    });
  console.log('ticks', ticks);
    return array;
  }

  console.log(bucketSort2([17, 9, 3, 2, 14, 4, 5, 7, 0, 33, 1, 3, 11, 23, 17, 11, 4, 5, 3], 33, 0));