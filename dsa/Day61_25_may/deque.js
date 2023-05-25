class DeQueue{
    constructor(size){
        this.size = size;
        this.data = [];
    }
    enqueue(value){
        // adds value in queue
        if((this.size&&(this.data.length<this.size))||!this.size){
             this.data.push(value)
        }else{
            console.log('Queue Overflows')
            return  null
        }

    }
    dequeue(){
        // remove value from queue
        if(isEmpty()){
            console.log('Queue is empty, Underflow Error')
            return null
        }
       return this.data.shift()
    }
    front(){
        // return first value in queue
        if(isEmpty()){
            console.log('Queue is empty, Underflow Error')
            return null
        }
        const value = this.data[0]
        console.log(value)
        return value
    }
    isEmpty(){
        return this.data.length===0;
    }
}

const q = new DeQueue();

q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.enqueue(4)
q.enqueue(5)
console.log(q.data)




