function Parent(){
    this.religion='Hindu';
    this.skinColor= 'Brown';
}

const p = new Parent();
console.log(p)

function Child(){
    this.name = "Ramu";
    this.age= 32;
    Parent.call(this)
   this.getReligion =function(){
       console.log(this.religion)
   }
}

const c = new Child()
console.log(c)
c.getReligion()
// prototype



class Car{
    constructor(engine,isSunRoof){
        this.tyre = 4;
        this.engine = engine
        this.isSunRoof = isSunRoof
        this.audioSystem = 'bose'
    }
}


// const mahindra = new Car('200cc',true)
// console.log(mahindra)

class MCar extends Car{
    constructor(isRearWheel,color){
        super('200cc',true)
        this.isRearWheel = isRearWheel;
        this.color = color;
        this.brand ='Mahindra'
    }
}


const thar = new MCar(true,'red');

console.log(thar)

// super keyword can be use in two ways
// super()->it will call the constructor of Parent
// super.tyre-> super can allow to access parent properties