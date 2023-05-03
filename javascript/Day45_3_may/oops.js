const obj ={
    name:'utkarsh',
    isEligible:true,
    getName:function(){
      console.log(this.name)
    }
  }
  
  obj.getName()
  
  
  function createHuman(gender){
    this.hands = 2;
    this.legs = 2
    this.brain = 'good'
    this.eyes = 2
    this.gender = gender
  }
  
  
  
  const male = new createHuman('male')
  const female = new createHuman('female')
  
  console.log(male,female)
  
  
  function car(brand){
    this.tyre=4;
    this.engine = 'xdsds';
    this.seats = 4;
    this.speakers ='bose'
    this.brand = brand
  }
  
  
  const mahindra = new car('Mahindra')
  const MG = new car('MG')
  
  
  
  const thar  = {...mahindra}
  
  thar.isConvertible = true
  
  
  console.log(thar)

  
  // constructor function 
function Class(name,numberOfStudents,classTeacher){
    this.name = name
    this.numberOfStudents = numberOfStudents;
    this.classTeacher= classTeacher;
    this.schoolName = 'St. Andrews School'
    this.GotoAssembly = function(){
      console.log('Go to Assembly')
    }
    this.createTimeTable = function(){
      console.log('This is time table for',this.name)
    }
  }
  
  const eightClass = new Class('VIII',32,'Ms. Seema');
  const seventhClass = new Class('VII',23,'Mr. Rahul');
  seventhClass.createTimeTable()

  // Number()
// String()
// Boolean()
// Object()
// Array()
// Function()


function user(){
    console.log(this)
    this.name = "Utkarsh" // this={}
  }
  
  
  const obj = new user()
  console.log(obj)
  
  
  function abc(){
   console.log(this) // current object from where this function is called 
  }
  
  abc()
  
  const obj2 = {
    name:"Ramesh",
    getName:function(){
      console.log(this.name)
    }
  }
  const obj3 = {
    name:"Jainendra",
  }
  
  
  // obj2.getName()-> ramesh
  
  // obj2.getName.call(obj3)
  
  
const shape = {
    radius: 10,
    diameter() {
      return this.radius * 2;
    },
    perimeter: () => 2 * 2 * this.radius,
  };
  
  radius =20;
  
  console.log(shape.diameter()); // 20
  console.log(shape.perimeter());





const shape = {
    radius: 10,
    diameter() {
      return this.radius * 2;
    },
    perimeter:function(){
      //this -> shape object
      const add = () => 2 * 2 * this.radius;
      
     return add()
    } ,
  };
  
  radius =20;
  
  console.log(shape.diameter()); // 20
  console.log(shape.perimeter());
  
  
  
  
  
  