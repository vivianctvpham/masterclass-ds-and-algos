class Node {
    constructor(value) {
        this.value = value; 
        this.next = null; 
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    //Returns first in line
    peek() {
        return this.first;
    }

    //Add to the queue
    enqueue(value){
        const newNode = new Node(value);

        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }

        this.length++;
        return this
    }

    //Remove from the front of the list
    dequeue() {
        if (!this.first) return null;

        if (this.first === this.last) {
            this.last = null;
        }

        // const holdingPointer = this.first;
        this.first = this.first.next;
        this.length--
        return this;
    }
}

function main () {
    const myQueue = new Queue();
    myQueue.enqueue('Joy')
    myQueue.enqueue('Matt')
    myQueue.enqueue('Pavel')
    myQueue.enqueue('Samir')
    myQueue.dequeue()
    myQueue.dequeue()
    myQueue.dequeue()
    myQueue.dequeue()
    console.log(myQueue.peek())
    console.log(myQueue)

    //Joy
    //Matt
    //Pavel
    //Samir
}

main()