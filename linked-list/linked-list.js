// [ NODE(head) ] -> [ NODE ] -> [ NODE(tail) ] -> null

/*

let list = {
  value: 12,
  next: {
    value: 20,
    next: {
      value: 1,
      next: null
    }
  }
};


*/

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // adds a new node containing value to the end of the list
  append(value) {
    let newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let pointer = this.head;
      while (pointer.nextNode !== null) {
        pointer = pointer.nextNode;
      }
      pointer.nextNode = newNode;
    }

    this.size++;
  }

  // adds a new node containing value to the start of the list
  prepend(value) {
    let newNode = new Node(value, this.head);
    this.head = newNode;

    this.size++;
  }

  // returns the total number of nodes in the list
  getSize() {
    return this.size;
  }

  // returns the first node in the list
  getHead() {
    return this.head;
  }

  // returns the last node in the list
  getTail() {
    let pointer = this.head;
    while (pointer.nextNode !== null) {
      pointer = pointer.nextNode;
    }

    return pointer;
  }

  // returns the node at the given index
  at(index) {
    let indexPointer = 0;
    let pointer = this.head;

    while (indexPointer < index) {
      indexPointer++;
      pointer = pointer?.nextNode;
    }

    if (!pointer) {
      return console.log("Index Not Found (Value Exceeding Linked List Size)");
    }

    return pointer;
  }

  // removes the last element from the list
  pop() {
    let currentPointer = this.head;
    let nextPointer = this.head.nextNode;

    while (nextPointer.nextNode !== null) {
      currentPointer = currentPointer.nextNode;
      nextPointer = nextPointer.nextNode;
    }

    const getNode = nextPointer;
    currentPointer.nextNode = null;

    this.size--;
    return getNode;
  }

  // returns true if the passed in value is in the list and otherwise returns false.
  contains(value) {
    let pointer = this.head;

    while (pointer.nextNode !== null) {
      if (value === pointer.value) return true;

      pointer = pointer.nextNode;
    }

    return false;
  }

  // returns the index of the node containing value, or null if not found.
  find(value) {
    let pointerIndex = 0;
    let pointer = this.head;

    while (pointer.nextNode !== null) {
      if (value === pointer.value) return pointerIndex;

      pointerIndex++;
      pointer = pointer.nextNode;
    }

    return null;
  }

  // represents your LinkedList objects as strings, ( value ) -> ( value ) -> ( value ) -> null
  toString() {
    let text = "";
    let pointer = this.head;

    while (pointer.nextNode !== null) {
      text += `(${pointer.value}) -> `;
      pointer = pointer.nextNode;
    }

    text += `(${pointer.value}) -> null`;
    return text;
  }

  // that inserts a new node with the provided value at the given index.
  insertAt(value, index) {
    if (index < 0 || index > this.size - 1) {
      console.log(`Index Not Valid`);
      return;
    }

    if (index === 0) {
      this.prepend(value);
      return;
    }

    let nodeBefore = this.at(index - 1);
    nodeBefore.nextNode = new Node(value, nodeBefore.nextNode);
    this.size++;
  }

  // that removes the node at the given index.
  removeAt(index) {
    if (index < 0 || index > this.size - 1) {
      console.log(`Index Not Valid`);
      return;
    }

    if (index === 0) {
      this.head = this.head.nextNode;
      return;
    }

    let nodeBefore = this.at(index - 1);
    nodeBefore.nextNode = nodeBefore.nextNode.nextNode;

    this.size--;
  }

  resetList() {
    this.head = null;
    this.size = 0;
  }
}
