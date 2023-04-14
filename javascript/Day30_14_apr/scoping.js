//Scoping


function abc(){
    var x = 0;
    console.log(x)
  }
  abc()
  console.log(x)

  //Scoping

var x = 1;
function my_function(){
  var y = 2;
  console.log(x,y)
  if(x<y){
    let z =3;
    console.log(x,y,z)
    }
  }


my_function()

console.log(x)


var x = 1;

if(true){
    let y = 2;
}


console.log(x,y)

var x = 1;

if(true){
    let y = 2;
    var j = 4;
}


console.log(x,j)


console.log(s) // undefined
var s=2;


let j = 2;

function abc(x,y){
    var p = 3;
    let g=  6; 
    
    console.log(p,x,j);
    function mno(z){
        var q = 4;
        
        console.log(p,q);
        if(q<z){
            console.log(g)
        }
    }
    mno(3);
}

abc(4,5)



var x = 1;

for(var i=0;i<2;i++){
    x+=i;
}
console.log(x,i)





var x = 1;

for(let i=0;i<2;i++){
    x+=i;
}
console.log(x,i)

function foo() {
  
    let a = b = 0;
    
    a++;
    return a;
  }
  foo();
  console.log(typeof a);
  console.log(typeof b);
