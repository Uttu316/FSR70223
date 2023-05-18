const person = {
    name: "Diksha",
    actions: ["bike", "hike", "ski"],
    printActions() {
      console.log(this)
      this.actions.forEach((action) => {
        console.log(this.name + " likes to " + action);
      });
    },
  };
  
  const person2 = {
    name:'Abhay',
    actions: ["cricket", "dance", "travel"],
  }
  
  person.printActions.call(person2)


// apply(context,arrayOfArgumnets)->apply(person2,[1,2,3])
//call(context,agumnets,,,,,...)->call(person2,5,6,7,8,8)


var greet = 'Hello World';
var toGreet = [].filter.call(greet, function(element, index) {
  return index > 5;
});
console.log(toGreet);


var fooAccount = {
    name: 'John',
    amount: 4000,
    deductAmount: function(amount) {

        this.amount -= amount;
        return this.amount;
    }
};

var barAccount = {
    name: 'John',
    amount: 6000
};


const amount = fooAccount.deductAmount.apply(barAccount, [400]);
console.log(amount)


var var1 = {myName: "ABC", };

var var2 = {myName: "XYZ"};

function preview(par1, par2) {
  
  console.log(this.myName, par1, par2);
}


preview(var2, ["First", "Second"]); 


var obj1 = {
    name:"Utkarsh",
    getName:function(){
      console.log(this.name)
    }
  }
  
  var obj2 = {
    name:'Raja'
  }
  
  const printName = obj1.getName.bind(obj2);
  
  printName()
  