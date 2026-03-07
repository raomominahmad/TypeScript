// class Chai {
//   flavour: string;
//   price: number;

//   constructor(flavour: string, price: number) {
//     this.flavour = flavour;
//     this.price = price;

//   }
// }

// const masalaCHai = new Chai("Kashmiri" , 30);

// access modifier

class Chai {
  public flavour: string = "Masala";

  private secretIngredients = "Cardamom";

  reveal() {
    return this.secretIngredients;
  }
  //  this class and class inheriting it has access
  protected shopName = "Chai corner";
}

const c = new Chai();
// c.reveal()

class Shop {
  protected shopName = "Chai corner";
}

class Branch extends Shop {
  getName() {
    return this.shopName;
  }
}

class Wallet {
  #balance = 100;

  getBalance() {
    return this.#balance;
  }
}

const w = new Wallet();

class Cup {
  readonly capacity: number = 255;

  constructor(capacity: number) {
    this.capacity = capacity;
  }
}

// controlled gates ( getter and setter )

class ModernChai {
  private _sugar = 2 // '_" with variable name as convention for private value
  
  get sugar(){
    return this._sugar
  }

  set sugar(value){
    if ( value > 5) throw new Error("Too sweet")
      this._sugar = value
  }

}

const ch =  new ModernChai()
ch.sugar

// static members

class EkChai{
  static shopName = 'Chaicode Caffe'

  constructor(public flavour:string){

  }
}

console.log(EkChai.shopName);

// abstract classes
abstract class Drink{
  abstract make() : void
}

class MyChai extends Drink{
  make(): void {
     console.log("Brewing Chai");
     
  }
}

// compostion in ts
class Heater{
  heat(){

  }
}

class ChaiMaker{
  constructor (private heater : Heater){
      
  }

  make(){
    this.heater.heat()
  }

}