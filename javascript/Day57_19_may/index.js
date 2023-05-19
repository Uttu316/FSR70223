// 

function findLargestNUmber(nums){
    let tallest = -1;
    for(let i=0;i<nums.length;i++){
        if(nums[i]>=tallest){
          tallest = nums[i];
        }
     
    }
    return tallest
  }
  
  function getSecondLargest(nums){
  
  }
  
  const result = findLargestNUmber([9,3,5,10,23,20])
  
  console.log(result)