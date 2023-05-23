// const array = new Array(5);

// console.log(array)

const arr =[];


arr.push(1)
arr.push(2)
arr.push(3)
arr.push(4)
// arr.unshift(-1)

console.log(arr)

// Write code to traverse the array in reverse order

// Loop the array in reverse order


// for(let i=parseInt((arr.length-1)/2);i>=0;i--){
//     console.log(arr[i])
// }

console.log(arr[2])




function findIndex(array,value){
    //   Linear Search
    
      for(let i =0;i<array.length;i++){
        if(array[i]===value){
          return i;
        }
      }
      
      return  -1
      
    }
    
    
    
    const arr = [2,-1,3,4,5,6,32,54];
    const targetValue = 5;
    
    const index = findIndex(arr,targetValue);
    
    
    console.log(index)
    
    
    const isPresent = (duplicates,x)=>{
        return duplicates[x]
    }
    
    function findDuplicates(arr){
      const duplicates = {};
      
        for(let i=0;i<arr.length;i++){
          const x = arr[i];
          
          if(!isPresent(duplicates,x)){
            
            for(let j=i+1;j<arr.length;j++){
              
              const y = arr[j];
              
            if(x===y){
              
              if(isPresent(duplicates,x)){
                  duplicates[x] += 1
              }else{
                duplicates[x] = 2
              }
     
            }
          }
          }
          
        }
      return duplicates;
     } 
    
    
    const arr = [1,2,4,5,2,6,8,8,10,10,10,2]
    
    /*
    
    Visit every element (let x)
      for each X visit every other number (let y)
          if x===y:
              store {2:[5,12]}
    
    */
    console.log(findDuplicates(arr))
     
    
    
    
         