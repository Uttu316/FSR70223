var x = 'hola' + true;

console.log( typeof (null + 'hola' )); // string
// console.log(typeof x)


var y = '2.54';

console.log(+y)
var z = '10';
console.log(-z)
console.log(typeof (2 >= '2'))

console.log(-'-10')

console.log(typeof(typeof (3>='2')))


console.log("foo" + (+ "bar")) // fooNaN



//Convert into String
 //String(value)->string

console.log(String(true))
console.log(String(100))
console.log(String("Abc"))
console.log(String(null))


//Convert into Number
 //Number(value)->number


console.log(Number('2'))
console.log(Number('-2'))
console.log(Number('-2.4354'))
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN
console.log(Number('ABC')); // NaN
console.log(Number(true)); //1
console.log(Number(false)); //0

//Convert into Boolean
 //Boolean(value)->boolean


 console.log(Boolean('1')); // true
 console.log(Boolean(null))
 console.log(Boolean(NaN))
 console.log(Boolean(''))
 console.log(Boolean(undefined))
 console.log(Boolean(0))
 console.log(Boolean(-1))
 console.log(Boolean(0.00001))
 
 
 
 

 var winner = window.prompt('Who won IPL?')

console.log(winner)

if(winner==='RCB'){
  console.log('Partyyyy')
}else{
  console.log('Its okay, Next year')
}
 
 


var winner = window.prompt('Who won IPL?')

console.log(winner)

if(winner==='RCB' || winner==='GT'){
  console.log('Partyyyy')
}else if(winner==='CSK'){
  console.log('Dhoni retired')
}else if(winner==='KKR'){
  console.log('Sharukh dance')
}else if(winner==='MI'){
  console.log('Ambani Dance')
}else{
  console.log('Worldcup Dekhenge')
}

var char = window.prompt('Enter a char')
console.log(char)
char = char?char.toUpperCase():'';
console.log(char)
switch(char){
  case "A":
  case "E":
  case "I":
  case  "O":
  case "U":
    console.log('I am Vowel')
    break
  default:
    console.log('Consonant'); 
}

var grade = prompt("enter the grade");

if(grade>=80){
    console.log("A grade");
}else if( grade >=60&&grade<80 ){
    console.log("B grade")
}else if(grade<60&& grade >=50){
    console.log("C grade")
}else if(grade<50&& grade >=45){
    console.log("D grade")
}else if(grade<45&& grade >=25){
    console.log("E grade")
}else{
    console.log("F grade");
}