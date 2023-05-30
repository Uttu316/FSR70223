const obj = {
    name:"Raja",
    age:50
}

const newObj = {...obj,city:"Agra"}
newObj.name = "Shivam"
console.log(newObj,obj)


const arr = [1,2,3,4,5]

const newArr = [9,10,...arr]
console.log(newArr)

const Obj ={
    name:'Azeema',
    city:'Dubai',
    age:22
}

const {name,...restProp} = Obj;
console.log(name,restProp)

const Arr = [1,2,3,4,5]
const [x,y,...restArr] = Arr;

console.log(restArr)


function my_func({name},...params){
    console.log(name,params)
}

my_func({
    name:"Utkarsh"
},2,3,4,5,6)

