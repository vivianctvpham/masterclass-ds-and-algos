// Implement a first in first out (FIFO) queue using only two stacks. 
//The implemented queue should support all the functions of a normal queue
// (push, peek, pop, and empty).

//Must use only standard operations of a stack, which means only push to the top,
//Peek/pop from the top, size, and is empty.

class CrazyQueue {
    constructor() {
        this.first = [];
        this.last = [];
    }

    peek() { 
        if (this.last.length > 0) {
            return this.last[0];
        }
        return this.first[this.first.length - 1];
    }

    enqueue(value) {
        const length = this.first.length;
        for(let i = 0;  i < length; i++) {
            this.last.push(this.first.pop())
        }
        this.last.push(value);
        return this;
    }

    dequeue() {
        const length = this.last.length;
        for (let i = 0; i < length; i++) {
          this.first.push(this.last.pop());
        }
        this.first.pop();
        return this;
      }

    empty(){
        return this.first.length === 0;
    }

}


function main() {

    const myQueue = new CrazyQueue();
    
    myQueue.enqueue('Joy');
    myQueue.enqueue('Matt');
    myQueue.enqueue('Pavel');
    myQueue.peek();
    myQueue.dequeue();
    myQueue.dequeue();
    myQueue.dequeue();
    console.log(myQueue.peek());
    console.log(myQueue)

}

main()