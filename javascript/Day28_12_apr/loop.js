var input = parseInt(window.prompt("Enter Value"));


for(var i=1;i<=10;i++){
  var result = input*i;
  console.log(result)
}


var total=0;


for(var x=1;x<=50;x++){
  total+=x;
}

console.log(total);


// 1-50 ==> sum of all prime numbers b/w 1 to 50


var total=0;


for(var x=1;x<=50;x++){
  if(x%2==0){
    total+=x;
  }
}

console.log(total)





var x = 1;
var sum = 0;
while(x<=50){
  if(x%2==0){  
   sum+=x;
  }
  x++;
}

console.log(sum)


var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]

var birthMonth = window.prompt("Enter you Birth Month");
// print index of birth month;

//Aug
/*

  check every index one by one 
   
  On Each iteration 
  if current value is given value 
      we break the loop with current index
  else
     we increment the iteration by one
*/

for(var i=0;i<months.length;i++ ){
  
  if(months[i]===birthMonth){
    console.log("Found at "+i+" position");
    break;
  }
  console.log(i)
}
console.log('End')

var students = [
    {
      name:'Ramesh',
      state:'UK',
    },{
      name:'Sharan',
      state:'PB'
    },{
      name:'Esha',
      state:'WB'
    },{
      name:'jainendra',
      state:'UP'
    },
    {
      name:'Utkarsh',
      state:'UP'
    }
  ]
  
  var others = 0;
  var peopleFromUP = 0;
  for(var i =0;i<students.length;i++){
    if(students[i].state==="UP"){
      peopleFromUP++;
      continue;
    }
    others++;
  }
  
  console.log(others,peopleFromUP)
  
  var arr  = ["A","B","C","D"]

for(var i=0;i<arr.length;i++){
  // this loop can be for index purpose
}

for(var each_value of arr){
  console.log(each_value)
}


var obj = {
  name:'Utkarsh',
  age:24
}


for(var key in obj){
  console.log(key)
}
  
  



