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

function sortList(list) {
    if (list.next === null) {
        return list;
    }

    let count = 0;
    let countList = list.head;
    let left = list;
    let leftPointer = list.head;
    let right = null;
    let rightPointer = null;

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
    }
    leftPointer.next = null;

    console.log('left', left, 'right', right);
    function display(list) {
        let current = list.head;
    
        while (current !== null) {
            console.log(current.value);
            current = current.next;
        }
    }
    display(left);
    // display(right);
}

console.log(sortList(createList()));