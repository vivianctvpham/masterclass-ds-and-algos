class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        if (typeof value === typeof this.head.value) {
            const newNode = {
                value: value,
                next: null, 
                prev: null
            };
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
            this.length++;
            return this;
        }
    }

    prepend(value) {
            const newNode = {
                value: value,
                next: null,
                prev: null
            }
            newNode.next = this.head;
            this.head.prev = newNode
            this.head = newNode;
            this.length++;
            return this;

    }

    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }

        return array;
    }

    insert(index, value) {
        if (index === 0) {
            return this.prepend(value)
        }
        if (index >= this.length) {
            return this.append(value)
        }
        const newNode = {
            value: value,
            next: null,
            prev: null
        };

        const leader = this.traverseToIndex(index - 1);
        const follower = leader.next;
        leader.next = newNode;
        newNode.prev = leader;
        newNode.next = follower;
        follower.prev = newNode;
        this.length++;
        return this.printList();
    }

    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++
        }
        return currentNode;
    }

    remove(index) {
        const leader = this.traverseToIndex(index - 1);
        const unwantedNode = leader.next;
        const follower = unwantedNode.next
        leader.next = follower;
        follower.prev = leader;
        this.length--;
        return this.printList();
    }
}



function main () {
    const myLinkedList = new DoublyLinkedList(10)
    myLinkedList.append(5);
    myLinkedList.append(16);
    myLinkedList.prepend(1);
    myLinkedList.insert(2, 99);
    // myLinkedList.insert(20, 88);
    // myLinkedList.remove(2);
    myLinkedList.remove(2);
    console.log(myLinkedList.printList());
    console.log(myLinkedList)
}

main()