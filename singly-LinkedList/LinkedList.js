class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    static fromValues = function(...args) {
        const ll = new LinkedList();
        for (let i = args.length - 1; i >= 0; i--) {
            ll.insertAtHead(args[i]);
        }
        return ll;
    }

    insertAtHead(data) {
        const newNode = new Node(data, this.head);
        this.head = newNode;
        this.length++;
    }

    getValueAt(index) {
        if(index < 0 || index >= this.length) return null;

        let current = this.head;
        for(let i = 0; i < index; i++) {
            current = current.next;
        }

        return current;
    }

    insertAtIndex(index, value) {
        if(index === 0) return this.insertAtHead(value);
        const prev = this.getValueAt(index - 1);
        if(prev == null) return null;

        prev.next = new Node(value, prev.next);
        this.length++;
    }

    removeHead() {
        this.head = this.head.next;
        this.length--;
    }

    removeAtIndex(index) {
        if(index === 0) return this.removeHead();
        const prev = this.getValueAt(index - 1);
        if(prev == null) return null;

        prev.next = prev.next.next;
        this.length--;
    }

    print() {
        let result = ['null'];
        for(let i = this.length - 1; i >= 0; i--) {
            result.unshift(this.getValueAt(i).value);
        }
        console.log(result.join(' -> '));
    }

}

class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}



module.exports = LinkedList;