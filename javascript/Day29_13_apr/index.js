var matrix = [[1,1,0],[0,0,1],[1,1,1]];
var total = 0;

for(var i=0;i<matrix.length;i++){
  var row = matrix[i];
  for(var j=0;j<row.length;j++){
     total+=matrix[i][j]
  }
}

console.log(total)


var matrix = [["A","B","C"],["C","D","E"],["K","C","J"]];
var target = "C";
var count =0;

for(var i=0;i<matrix.length;i++){
  var row  = matrix[i];
  for(var j=0;j<row.length;j++){
    if(matrix[i][j]===target){
      count++;
    }
  }
}

console.log(count)


function machine(WheatinKg){ // input
  
    var dirt = 2;
   var remainWeight = WheatinKg-dirt; // process
   var flour = remainWeight + 1; // process
  
    return flour; // output
}



var bowl = machine(10);
console.log(bowl);


function sum(x,y){
    console.log(x+y)
}



sum(5,4)


// create a function which accepts an array and return the sum of given array;



function addition(arr){
  
    var a = arr;
    var sum =0;
    for(var i=0;i<a.length;i++){
      sum+=a[i];
    }
    return sum;
  
  }
  
  var array = [1,2,3,4];
  var b = addition(array);
  console.log(b);



  function abc(x,z){ // parameters
   
    //function body
    
    return 1; // return statement(only one value)
  }// function declaration 
  
  
  
  abc(1,2,3); // function call,(arguments)
  
  
  function abc(x,y,z=3){ // default value

    return x+y+z; 
  } 
  
  var total = abc(1,2);
  
  console.log(total)

  function percentage(percent, total=100) {
    return ((percent/ 100) * total).toFixed(2)
}

var s = percentage(78);
var r = percentage(65);
var e = percentage(32);
var sh = percentage(76);
var m = percentage(55);


console.log(s,r,e,sh,m)


function getFullName(first,last){ //number of parameters
    var allArguments =  arguments; // array of all arguments 
   
    var name = ""
    for(var i=0;i<allArguments.length;i++){
          name+=allArguments[i]
    }
    return name
  }
  
  var myName = getFullName('Utkarhs',"Gupta","ABC")
  console.log(myName)

  

// write a function which accets user Object and print his details 

function createUser() {
    var name = prompt();
    var email = prompt();
    var age = prompt();
    var user = {
    name: name,
    age: age,
    email: email
  };
  return user;
}
function showDetails(userInfo){
  console.log('User Name: '+userInfo.name)
  console.log('User Age: '+userInfo.age)
  console.log('User Email: '+userInfo.email)
}
var user1 = createUser();
var user2 = createUser();
showDetails(user1)
showDetails(user2)



// write a funciton which accets a number and return square of that number


// wrte a function which return the area of rectangle;



function countVowel(str) {
    var count = 0;
    str=str.toLowerCase();
    for(var i=0;i<str.length;i++){
      if(str.charAt(i)=="a"||str.charAt(i)=="e"||str.charAt(i)=="i"||
         str.charAt(i)=="o"||str.charAt(i)=="u"){
         count++; //Increment vowel count
      }
    }
    return count;
  }
  
  // console.log(countVowel("Hello")) //2
  // console.log(countVowel("Umbrella")) //3
  


  //multiole duplicates
  var arr = [1,2,3,3,5,2,7];


for(var i=0;i<arr.length-1;i++){
   for(var j=i+1;j<arr.length;j++){
       if(arr[i]==arr[j]){
          console.log(arr[i])  
       }
   }
}




function find_duplicates(arr){
    var obj ={ 
    };
    var output =[]
    for(var i of arr){
       if(obj[i]){
           obj[i]+=1
       }else{
           obj[i] =1;
       }
    }
    
    for(var i in obj){
        if(obj[i]>1){
            output.push(i)
        }
    }
    return output; 
}

var arr = [1,2,3,3,5,2,7];

var duplicates =find_duplicates(arr);

console.log(duplicates)

