const LinkedList = require('./linkedList');

function createList() {
    let list = new LinkedList();

    list.insertLast(5);
    list.insertLast(9);
    list.insertLast(2);
    list.insertLast(87);
    list.insertLast(0);
    list.insertLast(13);

    return list;
}

function mergeSort(left, right) {
    let result = new LinkedList();

    let resultPointer = result.head;
    let pointerLeft = left;
    let pointerRight = right;
    // If true then add left most node value in result, increment left pointer else do the same to right linked list, this loop will execute until pointers of either a left or right node equals null
    // console.log('left', pointerLeft, 'right', pointerRight)
    while (pointerLeft && pointerRight) {
        let tempNode = null;

        if (pointerLeft.value > pointerRight.value) {
            tempNode = pointerRight.value;
            pointerRight = pointerRight.next;
        } else {
            tempNode = pointerLeft.value;
            pointerLeft = pointerLeft.next;
        }
        // console.log("tempNode", tempNode);
        if (result.head == null) {
            result.insertFirst(tempNode);
            resultPointer = result.head;
            // console.log("pointer", resultPointer)
        } else {
            result.insertLast(tempNode);
            resultPointer = resultPointer.next;
        }
    }

    // Add the remaining elements in the last of resultant linked list
    resultPointer.next = pointerLeft;
    while (resultPointer.next) {
        resultPointer = resultPointer.next;
        resultPointer.next = pointerRight;
    }

    return result.head;
}

function sortList(list) {
    if (list.next === null) {
        return list;
    }

    let count = 0;
    let countList = list.head;
    let left = list;
    let leftPointer = list.head;
    let right = null;
// console.log(countList)
    // count the nodes
    while (countList.next !== null) {
        count++;
        countList = countList.next;
        
    }
   
    // count the middle of list
    let middle = Math.floor(count / 2);
    let count2 = 0;

    // separate the left and the right with respect to the middle
    while (count2 < middle) {
        count2++;
        leftPointer = leftPointer.next;
    }
    right = new LinkedList();

    while (leftPointer.next) {
        right.insertLast(leftPointer.next.value);
        leftPointer = leftPointer.next;
        left.remove(leftPointer.value);
    }
console.log('left', sortList(left), 'right', sortList(right));

    // return mergeSort(sortList(left), sortList(right))
}

console.log(sortList(createList()));