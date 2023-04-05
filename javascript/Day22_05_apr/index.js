var x = true; // 1 // 10

var y = false; // 0,null,undefined,'',NaN;

//console.log(x&&y); // AND operator

//console.log(x||y); // OR operator

// console.log(false&&false&&true&&true)

//console.log(10+2*3)

// console.log(true||false&&true)

// console.log(0&&1)

// console.log(true&&10&&''||null||false)

// console.log(true||false)

// console.log(false||false||10&&true)

var a = 2;

var b = 3;

// var output = (a<b)?"Yes":"No";


// var output = (a>b)?10*2:true;


// var output = (true&&10&&false||'')?'India':'Pak'

console.log((true && 13.0 && false) || ("" && "ABC") || (null && "C"));

var exp = (true && 7) || "AbC";

var output = exp ? (true && false ? "Edyoda" : "Learn") : "Out";

console.log(output);

var p = false||true||10;
 
console.log(!!p)


typeof 1
'number'
typeof ""
'string'
typeof "shj"
'string'
typeof true
'boolean'
typeof null
'object'
typeof undefined
'undefined'
typeof 10.10
'number'
typeof NaN
'number'


var x= Infinity;

var n = NaN;

console.log("Ut"/3)

var k = Infinity;

console.log(!isFinite(k)); // isInfinite
console.log(isNaN(n));
console.log(n===NaN); // false
console.log(null===null); //true
console.log(null==undefined); //true