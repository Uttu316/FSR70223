class Stack {
  constructor() {
    this.data = new Array(10);
  }
  push(value) {
    if (this.data.length > 10) {
      cosole.log("Stack is Overflow");
      return null;
    }
    this.data.push(value);
  }
  pop() {
    this.data.pop();
  }
  peek() {
    if (this.isEmpty()) {
      console.log("Stack is Underflow");
      return null;
    }
    const lastIndex = this.data.length - 1;
    const value = this.data[lastIndex];
    console.log(value);
    return value;
  }
  isEmpty() {
    return this.data.length === 0;
  }
}

const s = new Stack();

s.push(1);
s.push(2);
s.push(3);
s.push(4);
s.pop();
const t = s.peek();

console.log(t);

s.push(1);
s.push(2);
s.pop();
s.push(3);
s.peek();
s.push(4);
s.pop();
s.pop();
s.peek();

//3,1

let arr = [2, 3, 4, 5, 6, 7];

const reversedArray = reveseArray(arr);
console.log(reversedArray);

function reveseArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    s.push(arr[i]);
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i] = s.pop();
  }
  return arr;
}


+AB //Prefix
A+B // Infix
AB- // Postfix
