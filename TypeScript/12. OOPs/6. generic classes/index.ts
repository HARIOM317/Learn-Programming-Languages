// generic class
class Box<T> {
  contents: T;

  constructor(value: T) {
    this.contents = value;
  }

  getContents(): T {
    return this.contents;
  }
}

const numberBox = new Box(100);
console.log(numberBox.getContents());

const stringBox = new Box("The Box");
console.log(stringBox.getContents());

// generic Stack class
class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  getStack(): T[] {
    return this.items;
  }
}

const numStack = new Stack();
numStack.push(10);
numStack.push(20);
numStack.push(30);
numStack.push(40);
numStack.push(50);
numStack.pop();
numStack.pop();

console.log(numStack.getStack());
