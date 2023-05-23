
function findIndex(array,value){
    //   Linear Search
    
      for(let i =0;i<array.length;i++){
        if(array[i]===value){
          return i;
        }
      }
      
      return  -1
      
}

const arr = [1,2,3,4,5,7,6]

const result = findIndex(arr,17)

/*
Best Case Scenario Omega(1):
  Performed only one step/instruction/operation

Worst Case Scenario Big-o O(n):
   Performed  step/instruction/operations till the last element
  Performed n(input size) number of operations
  
Average Case Scenario Theta(n/2):
  Some number of operations
  Average calculation of Best an d Worst time
  
  
  
Constant complexity-> O(1) -> any single task-> i++,--i
logramthic complexity -> log(n) -> binay search
Linear complexity->O(n) ->linear search
LinearLograthmic complexity->O(n*logn)->merge sort
Sqare complexity->O(n2) -> almost all sorting algorithm
Cubic complexity->O(n3) -> caluclate sum of faces of cube
Polynomial complexity-> O(n^m) -> matrix
O(2^n)->generate pairs from an array/ combination/permutation
O(n!)-> factorial of number

*/



// arr.push(8) O(n)


function sumofMatrix(arr){
    
    let sum=0;
    for(let i=0;i<arr.length;i++){
      for(let j = 0;j<arr[i].length;j++){
        sum+=arr[i][j]
      }
    }
    return sum
  }
  
  
  let array = [[1,2,3],[4,5,6]]
  const r = sumofMatrix(array)
  console.log(r)

//   O(n*m)