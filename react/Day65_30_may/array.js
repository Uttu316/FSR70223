/* Map

 const newArray =   array.map((item,index,currArray)=>{
        
        return item*2
    })

const newArray = [1,2,3,4,5].map((i)=>{
    if(i!=2){
        return i+2;
    }
})
console.log(newArray)
*/


/*
    ForEach
    [1,2,3,4,5].forEach((i)=>{
    console.log(i)
    return i
})
*/

/* Find

let searchedItem =users.find((each_item)=>each_item.city.toLowerCase()==='agra')

console.log(searchedItem)

*/

/*
 Find Index
let searchedIndex =users.findIndex((each_item)=>each_item.city.toLowerCase()==='agra')

console.log(searchedIndex)

*/


/*
 Filter

let filteredArray =users.filter((each_item)=>each_item.city.toLowerCase()==='jaipur')

console.log(filteredArray)


*/




//const newArray =  [].map((i)=>x) -> gives new array of values returned from inside function

// [].forEach((i)=>x=2) -> simply loops your array

// [].find((i)=>true) -> returns first element for which inner condition gives true, return undefined if not matched

// [].findIndex((i)=>true)-> return index for which inner condition gives true, return -1 if not matched

// [].filter((i)=>true)-> return all matched items for which inner condition gives true, return [] if not matched


const arr =['a','b','c','d','e']

const index = arr.indexOf('e')
console.log(index)

var animals = [
    { name: "Jason", species: "rabbit" },
    { name: "Jessica", species: "dog" },
    { name: "Jacky", species: "owl" },
    { name: "Luke", species: "fish" },
    { name: "Junior", species: "bat" },
    { name: "Thomas", species: "cat" },
      { name: "Jacub", species: "rat" }
  ];
  
  //  outut all speciecs in an array
  
  
  const speciecs = animals.map((animal)=>animal.species)
  console.log(speciecs)
  
  //  print the name of rat
  var rat = animals.find(animal => animal.species === "rat");
  
  if (rat) {
    console.log(rat.name);
  } else {
    console.log("Not found.");
  }
  
  //print all animal's names whose species includes "at" and name of that animal should start from J
  
  const filteredAnimals =  animals.filter((i)=>{
     return (i.species.includes('at') && i.name[0].toLowerCase()==='j')
  })
  console.log(filteredAnimals)
  filteredAnimals.forEach((i)=>{
      console.log(i.name)
  })
  
  
  
  
  
  
  
  