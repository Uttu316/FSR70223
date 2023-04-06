var x = 2;
x.toString()
'2'
var y = 1121323;
y.toString()
'1121323'

var z = 13.2;
parseInt(z) // 13

var j = '100.2223';

var r = parseFloat(j); // 100.2223
typeof r
'number'


var l = 'ABC'
parseInt(l)
NaN
parseInt('a')
NaN


var f = 13.4;
f.toFixed()
'13'
var f = 13.473;
f.toFixed(2)
'13.47'
var f = 13.476;
f.toFixed(2)
'13.48'
parseFloat(f.toFixed(2))
13.48


var s = 'She said, "you are a good boy". '
s
'She said, "you are a good boy". '
var s = "She said, \"you are a good boy\". "
s
'She said, "you are a good boy". '


var str = "  Ramesh is a GOOD boy.   "

var str2 = "He lives in President's House"


var c = str.toUpperCase();

var s = str.toLowerCase();


var sentence = str.concat(" ",str2)
//"Ramesh is a GOOD boy. He lives in President's House"

console.log(str.trim())


var name = "Sneha"; // 5

var letter = name.charAt(3)

var last = name.length-1; //4

var lastLetter = name[last]; //a

console.log(lastLetter);

var fruits= "Apple-Orange-Grapes-Papaya";

var fruitsNames = fruits.split('-')

console.log(fruitsNames)


var fullName= "Utkarsh Kumar Gupta"

var names = fullName.split(' ');
 
var fName = names[0];
var mName = names[1];
var lName=  names[2];

console.log(fName,mName,lName)
console.log(name.split(''))

/*
array;

var arr = [1,"Utkarsh",24.5,true]

arr[0]
arr[1]
arr[2]
//index->position->0

*/

var kname = "Karishma Naidu";

var pos = kname.indexOf('Naidu')

var pos = kname.indexOf('i',4)

console.log(pos)
var lpos = kname.lastIndexOf('i')

console.log(lpos)

// -1 will be output if not found

 var piece = kname.slice(2,5)
var piece = kname.substr(4,3)

console.log(piece)







window.alert('I am alert')
var choice = window.confirm('Are you sure?');

var age = window.prompt('Enter you age');


console.log(parseInt(age))