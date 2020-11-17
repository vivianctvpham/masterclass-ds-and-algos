class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

//This is using Linked Lists
class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    //Lets us see the top element/node
    peek() {
        return this.top;
    }

    //Lets us add node to top of stack
    push(value) {
        let newNode = new Node(value);
        if (this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            let holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer
        }
        this.length++
        return this
    }

    //Lets us remove from top of stack
    pop() {
        if (!this.top) return null;

        //In the case of the last node;
        if (this.top === this.bottom) {
            this.bottom = null;
        }
        // const holdingPointer = this.top;
        this.top = this.top.next;
        this.length--;
        return this;
    }
}

//This is using Arrays
class StackArray {
    constructor() {
     this.array = []
    }

    //Lets us see the top element/node
    peek() {
        return this.array[this.array.length - 1];
    }

    //Lets us add node to top of stack
    push(value) {
        this.array.push(value)
        return this;
    }

    //Lets us remove from top of stack
    pop() {
        this.array.pop()
        return this;
    }
}



function main () {
    //LINK LISTS IMPLEMENTATION
    // const myStack = new Stack();
    // myStack.push('Google');
    // myStack.push('Udemy');
    // myStack.push('Discord');
    // myStack.pop();
    // myStack.pop();
    // myStack.pop();
    // console.log(myStack.peek())
    // console.log(myStack)

    //Discord
    //Udemy
    //Google


    // ARRAY IMPLEMENTATION
    const myArrayStack = new StackArray();
    myArrayStack.push('Google');
    myArrayStack.push('Udemy');
    myArrayStack.push('Discord');
    myArrayStack.pop();
    // myArrayStack.pop();
    // myArrayStack.pop();
    console.log(myArrayStack.peek())
    console.log(myArrayStack)
}

main()