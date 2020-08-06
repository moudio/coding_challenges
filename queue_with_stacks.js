class Queue {
  constructor() {
    this.firstStack = [];
    this.secondStack = [];
  }

  enqueue(val) {
    this.firstStack.push(val);
    return this.firstStack;
  }

  dequeue() {
    if (this.firstStack.length === 0) {
      throw Error('The Queue is empty');
    }
    while (this.firstStack.length) {
      let popped = this.firstStack.pop();
      this.secondStack.push(popped);
    }
    this.secondStack.pop();
    while (this.secondStack.length) {
      let popped = this.secondStack.pop();
      this.firstStack.push(popped);
    }
    return this.firstStack;
  }

  peek() {
    return this.firstStack[0];
  }
}

let queue = new Queue();
queue.dequeue();
console.log(queue);
queue.enqueue(1);
queue.enqueue(3);
queue.enqueue(5);
queue.dequeue();
console.log(queue);
