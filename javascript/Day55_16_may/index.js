class Animal{
    constructor(category){
        this.category = category; 
    }
    static origin(){
        console.log('Asian')
    }
}

const a = new Animal('Tiger')
Animal.origin()


array
// []length: 0[[Prototype]]: Array(0)
array.__proto__
// [constructor: ƒ, at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, …]at: ƒ at()concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()findLast: ƒ findLast()findLastIndex: ƒ findLastIndex()flat: ƒ flat()flatMap: ƒ flatMap()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()slice: ƒ slice()some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toReversed: ƒ toReversed()toSorted: ƒ toSorted()toSpliced: ƒ toSpliced()toString: ƒ toString()unshift: ƒ unshift()values: ƒ values()with: ƒ with()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): {at: true, copyWithin: true, entries: true, fill: true, find: true, …}Symbol(flat): ƒ (b)Symbol(flatMap): ƒ (b,c)Symbol(includes): ƒ (b,c)Symbol(includes): ƒ (b,c)Symbol(values): ƒ ()Symbol(values): ƒ ()[[Prototype]]: Object
array.__proto__.__proto__
// {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}constructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: (...)get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()
array.__proto__.__proto__.__proto__
// null



Array.prototype.findEven = function(){
    const array = this;
   for(let i=0;i<array.length;i++){
       if(array[i]%2===0){
           return array[i]
       }
   }
   return null
}


const arr = [1,8,3,4,5]

const result = arr.findEven()

console.log(result)

// write myMap function an assign it to prototype of Array

Array.prototype.myMap = function(callback){
  var newArray = [];
  for(var i=0; i<this.length; i++){
    var count = callback(this[i],i,this);
    newArray.push(count);
  }
  return newArray;
}; 


const newArr = [1,2,3,4].myMap((curr,index)=>{
        return curr*index
})
console.log(newArr)
