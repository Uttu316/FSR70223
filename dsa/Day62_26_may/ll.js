class Node{
    constructor(value){
        this.data=value;
        this.next=null;
    }
}

class LinkedList{
    constructor(){
        this.head=null;
    }
    print(){
        console.log(JSON.stringify(this))
    }
    add(data){
        const node = new Node(data);
        if(this.isEmpty()){
            this.head=node;
        }else{
            let temp = this.head;
            while(temp.next!=null){
                temp= temp.next
            }
            temp.next = node;
        }
    }
    pop(){
        if(this.isEmpty()){
            console.log('Empty List')
            return null
        }
        let temp = this.head.next;
        let prev = this.head;
        while(temp.next!=null){
            prev = temp;
            temp= temp.next;
        }
       prev.next = null
    }
    isEmpty(){
        return this.head===null
    }
}

const ll = new LinkedList();
ll.add(1)
ll.add(2)
ll.add(3)
ll.add(4)
ll.add(5)
 ll.print()
ll.pop()
  ll.print()



