function Node(data) {
    this.node = data;
    this.next = null;
}

function LinkedList(list) {
    this.head = list || null
}

LinkedList.prototype.insert = function(data) {
    if (this.head === null) {
        this.head = new Node(data);
    }

    else {
        let list = this.head;
        while (list.next) {
            list = list.next;
        }
        list.next = new Node(data)
    }
}

LinkedList.prototype.iterate = function() {
    if (this.head === null) {
        return null;
    }

    let list = this.head;
    while (list) {
        console.log(list.node);
        if (list.next) {
            console.log(' -> ');
        }
        list = list.next;
    }
}

LinkedList.prototype.mergeSort = function(list) {
    if (list.next === null) {
        return list;
    }

    let count = 0;
    let countList = list;
    let leftPart = list;
    let leftPointer = list;
    let rightPart = null;
    let rightPointer = null;

    while (countList.next !== null) {
        count++;
        countList = countList.next;
    }

    let mid = Math.floor(count / 2);
    let count2 = 0;

    while (count2 < mid) {
        count2++;
        leftPointer = leftPointer.next;
    }

    rightPart = new LinkedList(leftPointer.next);
    leftPointer.next = null;

    return this._mergeSort(this.mergeSort(leftPart), this.mergeSort(rightPart.head));
}

LinkedList.prototype._mergeSort = function(left, right) {
    let result = new LinkedList();

    let resultPointer = result.head;
    let pointerLeft = left;
    let pointerRight = right;

    while (pointerLeft && pointerRight) {
        let tempNode = null;

        if (pointerLeft.node > pointerRight.node) {
            tempNode = pointerRight.node;
            pointerRight = pointerRight.next;
        }
        else {
            tempNode = pointerLeft.node;
            pointerLeft = pointerLeft.next;
        }

        if (result.head === null) {
            result.head = new Node(tempNode);
            resultPointer = result.head;
        }
        else {
            resultPointer.next = new Node(tempNode);
            resultPointer = resultPointer.next;
        }
    }

    resultPointer.next = pointerLeft;
    while (resultPointer.next) {
        resultPointer = resultPointer.next;
        resultPointer.next = pointerRight;
    }

    return result.head;
}

let l = new LinkedList();
l.insert(10);
l.insert(20);
l.insert(3);
l.insert(2);
l.insert(1);

// l.iterate();
display(l);

l.head = LinkedList.prototype.mergeSort(l.head);

// console.log('After sorting: ');
// l.iterate();

console.log(l);

function display(list) {
    let curr = list.head;
    while (curr) {
        console.log(curr.node);
        curr = curr.next;
    }
}

display(l);