
var x = 2;
function abc(){
  setTimeout(()=>{
    setTimeout(()=>{
       console.log('Hey');
    },2000)
    console.log('HEllo');
  },1000)
  
  // 30 secs
}

function xyz(){
  console.log('Bye')
}


 abc()

xyz()


const foo = function(){ console.log("First");}
const bar = function(){ setTimeout(() => console.log("Second"), 0);}
const baz = function(){console.log("Third");}


bar();
foo();
baz();



for(let x=0;x<5;x++){
    setTimeout(()=>{
      console.log(x)
    },1000)
  }
  