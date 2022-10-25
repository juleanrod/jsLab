export default class SinglyLinkedList<T> {
    public length: number;
    private head?: Node<T>;

    private class Node<T> {
        val: T;
        //prev: Node<T>;
        next?: Node<T>;
    }

    constructor(value: T) {
        this.length = 0;
        this.head = new Node(value);
        
    }

    prepend(item: T): void {

}
    insertAt(item: T, idx: number): void {

}
    append(item: T): void {

}
    remove(item: T): T | undefined {

}
    get(idx: number): T | undefined {
        
        let curr = this.head;
        for (let i = 0; i < idx && curr; i++) {
            if(idx == i) return curr.val;
            curr = curr.next;
        }

        return curr?.value;

    }
    removeAt(idx: number): T | undefined {

}
}
