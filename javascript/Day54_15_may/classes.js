class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
        // this.getName = function(){
        //      console.log(this.name) 
        // }
    }
    getName(){
        console.log(this.name);
    }
    getAge(){
        console.log(this.age)
    }
    
}


// function Person(name){
//     this.name = name;
//     this.getName = function(){
//         console.log(this.name)
//     }
// }

const p = new Person("Utkarsh",24);
console.log(p)
p.getName()
p.getAge()







// class Practice{
//   constructor(state, district){
//     this.state=state;
//     this.district=district;
//   }
// }
// const newState=new Practice("uk", "almora");
// console.log(newState)