class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  getSize() {
    return this.size;
  }

  isEmpty() {
    return this.size === 0;
  }

  // add new node to the beginning
  prepend(value) {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.size++;
  }

  // add new node to end of the list
  append(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
    } else {
      let curr = this.head;

      while (curr.next) {
        curr = curr.next;
      }
      curr.next = newNode;
    }
    this.size++;
  }

  printList() {
    let listValues = "";
    let curr = this.head;
    while (curr) {
      listValues += `${curr.value}-> `;
      curr = curr.next;
    }
    console.log(listValues);
  }

  // remove duplicates without set
  removeDuplicatesWithoutSet() {
    let curr = this.head;
    while (curr) {
      let runner = curr;
      while (runner.next) {
        if (runner.next.value === curr.value) {
          runner.next = runner.next.next;
          this.size--;
        } else {
          runner = runner.next;
        }
      }
      curr = curr.next;
    }
  }

  // remove duplicates using set
  removeDuplicate() {
    let set = new Set();
    let curr = this.head;
    let prev = null;
    while (curr) {
      if (set.has(curr.value)) {
        prev.next = curr.next;
        this.size--;
      } else {
        set.add(curr.value);
        prev = curr;
      }
      curr = curr.next;
    }
  }

  removeKthNode(n) {
    if (n < 1 || n > this.size) {
      console.log("invalid node");
      return;
    }
    if (n === 1) {
      this.head = this.head.next;
      this.size--;
      return;
    }
    let curr = this.head;

    for (let i = 1; i < n; i++) {
      curr = curr.next;
    }
    curr.next = curr.next.next;
    this.size--;
  }

  removeNthNodeFromBack(n) {
    let curr = this.head;

    if (n < 1 || n > this.size) {
      console.log("invalid node");
      return;
    }
    let posToDelete = this.getSize() - n;

    if (posToDelete === 1) {
      this.head = this.head.next;
      this.size--;
      return;
    }
    for (let i = 0; i < posToDelete; i++) {
      curr = curr.next;
    }

    curr.next = curr.next.next;
    this.size--;
  }
}

const ll = new LinkedList();

ll.append(1);
ll.append(2);
ll.append(3);
ll.append(3);
ll.append(1);
ll.prepend(22);
ll.prepend(23);
ll.printList();
// ll.removeKthNode(3);
ll.removeNthNodeFromBack(2);
ll.printList();
