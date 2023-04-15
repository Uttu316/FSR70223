
console.log(x)

var x = 3;


let s=2;

console.log(x,s);




let x = 2;

function  abc(){
  console.log(x)
  var x = 0;
}



abc()



abc();

let x = 2;

function  abc(){
  console.log(x)
  var x = 0;
}


abc();

var y = 2;

function  abc(){
  console.log(x,y)
  var x = 0;
}


/*
Hoisting:

y:undefined;
abc:func();

// abc EC
  
  x: undefined
  
  undinfined,  undefined

*/

abc();

console.log(x);

var x = 0;


function abc(){
  x =2;
  x++;
  let y = 0
  
  y = x;
  console.log(y,x);
}

if (true) {
    function foo() {
      console.log(1);
    }
  } else {
    function foo() {
      console.log(2);
    }
  }
  
  
  foo();


  function foo() {
    bar();
  
    return;
  
    function bar() {
      console.log("bar");
    }
  }
  
  foo();


  function abc(xyz){
    xyz()
  }
  
  
  function pqr(){
    console.log("hello")
  }
  
  
  abc(pqr)



  function foo() {
    let a = b = 0;
    a++;
    return a;
  }
  
  foo();
  console.log(typeof a);
  console.log(typeof b);
  var a = 10;
console.log("line number 2", a);

function fn() {
  console.log("line number 4", a);
  var a = 20;
  a++;
  console.log("line number 7", a);
  if (a) {
    var a = 30;
    a++;
    console.log("line number 11", a);
  }
  console.log("line number 13", a);
}
fn();
console.log("line number 2", a);


/*

line number 2 10
line number 4 undefined
line number 7 21
line number 11 31
line number 13 31
line number 2 10

*/