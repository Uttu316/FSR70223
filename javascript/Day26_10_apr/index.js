var enteredAlphabet = prompt()

var alphabet = enteredAlphabet.toLowerCase();

var ascii = alphabet.charCodeAt();

if(ascii>=97 && ascii<=122){
  switch(alphabet){
  case "a":
    console.log("its a vowel");
    break;
  case "e":
    console.log("its a vowel");
    break;
  case "i":
    console.log("its a vowel");
    break;
  case "o":
    console.log("its a vowel");
    break;
  case "u":
    console.log("its a vowel");
    break;
  default:
    console.log("its a consant");
    break;   
}
}else{
  console.log('Non alphabetic character')
}


var arr = ["Karishma","Raja","Ramesh","Vinay","Sharank"];

var twoDArr = [[1,2,3],[4,5,6],[7,8,9]]
var threeDArr = [[1,2,3],[4,[-1,-2,-3],6],[7,8,9]]

console.log(twoDArr[0][0])
console.log(twoDArr[2][1])

console.log(threeDArr[1][1][1])

