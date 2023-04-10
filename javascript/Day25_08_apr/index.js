var x = 1;


var r = ++x + x++ + ++x

console.log(x,r)

var x = 3;


var r = --x + x--

console.log(x,r)



var a = 1;
var b = 2;
var c;
var d;
c = ++b;
d = a++;
c++;
b++;
++a;
console.log(a + " " + b + " " + c+' '+d);

//3,4,4


var input = 7;
var output1 = ++input + ++input + ++input; //10
var output2 = input++ + input++ + input++;// 13
var output3 = input++ + ++input + input++; //16




console.log(output1,output2,output3,input);
// 27 33 43



var s= 1;
//s=s+5;
s+=5;
// s =s*5
s*=5
// s = s/2
s/=2
//s=s-6
s-=6;




var user ={
    age:24,
    name:"Utkarsh",
    city:'Agra',
    isEligible:true,
  }
  
  
  
  var age = user.age;
  
  console.log(age)
  
  var name = user["name"]
  
  console.log(name)
  
  console.log(user["city"],user.city)


  var a={
    name:"jain",
    age:22,
    place:"lucknow",
    hoobies:["cricket","coding","sleeping"],
    address:{
      city:'Lucknow',
      pincode:'3223233',
      state:'UP',
      country:'India',
    }
  }
  
  console.log(a.address.pincode)
  
  console.log(a.hoobies[0])
  a.name = "Mahesh";
a.hoobies[0]  = "Footbal"
a.address.state = "UK"
console.log(a)
a.fatherName ="Gandhi";

delete a.place;

console.log(a)

  

var keys = Object.keys(a); // get all keys of an object

var values = Object.values(a); // get all values in an array of an object

console.log(keys.length)