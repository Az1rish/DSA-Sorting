function shuffle(arr) {
    let newArr = [];
    while (arr.length) {
        newArr.push(arr.splice(Math.floor(Math.random() * arr.length), 1));
    }
    return newArr.flat();
}

// console.log(shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));

// You were supposed to do it in place, now do it without creating a new array!!!

function shuffle2(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        let curr = arr[i];
        arr[i] = arr[j];
        arr[j] = curr;
    }
    return arr;
}

console.log(shuffle2([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));