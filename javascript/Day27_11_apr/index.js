var arr = [1,2,3,4,5,6,-1,-2];

arr.push(10)
arr.push(-1)
arr.push(20)
arr.push(32)
arr.pop()
arr.pop()
arr.push(30)
arr.push(15)
var k = arr.pop()
console.log(arr.length,k)

var arr = [1,2,3,4,5];

 arr.reverse(); // updates original array

console.log(arr)


var arr2 = [-1,-2,-3,-4,-5];

var newArray = arr.concat(arr2); // return a new merged array;

console.log(newArray);



 var removedArrayPart = arr.splice(2, 1);

 console.log(arr,removedArrayPart)



arr.splice(2, 0,-2);

console.log(arr)

var arr = ["A","B","C","D"]


arr.splice(2,0,"X")
arr.reverse()
arr.pop()
arr.push('Z')

console.log(arr)



var numbers = ["a","c","b"];

var sortedArr =numbers.sort(customSort);



function customSort(b,a){
  if(b>a){
    return 1
  }
  else if(b<a){
    return -1;
  }
  return 0
}


console.log(sortedArr)



var students =[
    {
      name:'Jagapthi',
      score:23
    },
    {
      name:'Ram',
      score:32
    },
    {
      name:'Shyam',
      score:84
    },
     {
      name:'Akram',
      score:53
    },
    {
      name:'Nagma',
      score:10
    }
]


var newArray = students.sort(sortStudents)


function sortStudents(b,a){
   return (b.score - a.score)
}


console.log(newArray)


var arr = [[1,2],[3,4],[5,6]]

var newArray = arr.flat()
console.log(newArray)

var arr = ["Ajay","Seema","Nagma","Sneha","Prince"]

var isPresent = arr.includes("Raja")
console.log(isPresent)