// Promise

// API Call

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    let goneForTrip = false;
    if (goneForTrip) {
      resolve("Success");
    } else {
      reject("Failure");
    }
  }, 2000);
});

p.then((response) => {
  if (response === "Success") {
    console.log("Packing Started");
  }
}).catch((error) => {
  console.log(error);
  console.log("Let's Breakup");
});

const p1 = Promise.reject(1)
const p2 = Promise.reject(2)
const p3 = Promise.resolve(3)


const combinedPromises = Promise.all([p1,p2,p3])

combinedPromises.then((responseArray)=>{
  console.log(responseArray)
  const [p1Res,p2Res,p3Res] = responseArray;
  console.log(p1Res,p2Res,p3Res)
}).catch((err)=>{
  console.log(err)
})

let arr = [1,2,3,4,5]
const n = arr.length-1;
const mid = parseInt(arr.length/2)

for(let i=0;i<mid;i++){
  let s = arr[i];
  let l = arr[n-i]
  
  arr[i] = l;
  arr[n-i] = s;
}
console.log(arr)