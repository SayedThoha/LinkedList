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
}

const ll = new LinkedList();

ll.append(1);
ll.append(2);
ll.append(3);
ll.prepend(22);
ll.prepend(23);
ll.printList();
