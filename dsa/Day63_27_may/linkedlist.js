class Node{
    constructor(data){
        this.data = data;
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
    add_AtBegining(data){
        const node = new Node(data);
        this.head = node;
    }
    push(data){
        if(this.isEmpty()){
            this.add_AtBegining(data)
        }else{
             const node = new Node(data)
              let curr = this.head;
              while(curr.next!=null){
                  curr=curr.next
              }
              curr.next = node;
        }
    }
    add_AtPos(data,pos){
        if(this.isEmpty()){
           this.add_AtBegining(data) 
        }else{
            const node = new Node(data);
            let curr = this.head;
            let prev = this.head;
            let i = 1;
            while(i<pos){
                i++;
                prev=curr
                curr=curr.next
            }
            prev.next =node;
            node.next = curr
        }
    }
    
    pop(){
        if(this.isEmpty()){
            console.log('Linked list is Empty')
        }
        else if(this.isSingleElemnt()){
            this.removeAtBeg()
        }
        else{
            let curr = this.head;
            let prev = this.head;
            
            while(curr.next!=null){
                prev=curr;
                curr=curr.next;
            }
            prev.next=null
        }
    }
    at(pos){
        if(this.isEmpty()){
            console.log('Linked list is Empty')
        }else{
            let curr = this.head;
            let prev = this.head;
            let i = 1;
            while(i<pos){
                i++;
                prev=curr
                curr=curr.next
            }
            const value = curr.data;
            console.log(value)
           return value
        }
    }
    remove_atPos(pos){
         if(this.isEmpty()){
            console.log('Linked list is Empty')
        }
         else if(pos==1){
            if(this.head){
                this.head = this.head.next
            }
        }
        else{
            let curr = this.head;
            let prev = this.head;
            let i = 1;
            while(i<pos){
                i++;
                prev=curr
                curr=curr.next
            }
            prev.next = curr.next;
        }
    }
    removeAtBeg(){
        this.head=null
    }
    isSingleElemnt(){
       return this.head && this.head.next==null 
    }
    isEmpty(){
       return this.head==null
    }
    findCycle(){
    let s = new Set();
    let curr = this.head;
    while (curr != null) {
      if (s.has(curr)) {
        console.log(true);
        return true;
      }

      s.add(curr);

      curr = curr.next;
    }

    console.log(false);
    return false;
  }
}


const ll = new LinkedList();

ll.push(1)
ll.push(2)
ll.push(3)
ll.push(4)
ll.push(5)
ll.add_AtPos(-1,4)
ll.add_AtPos(-2,2)
ll.add_AtPos(-3,3)
// ll.pop()
// ll.pop()
// ll.pop()

ll.at(2)
// ll.at(6)
// ll.at(1)
ll.remove_atPos(1)
// ll.remove_atPos(3)

ll.print()
