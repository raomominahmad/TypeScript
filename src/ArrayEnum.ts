const chaiFlavour: string[] = ["Masala", "Adrak"];

const chaiPrice: number[] = [10, 20];

// Another way of initializing array of type number
const rating: Array<number> = [4.5, 5.0];

type Chai = {
  name: string;
  price: number;
};

// Array of objects

const menu: Chai[] = [
  { name: "Masala", price: 15 },
  { name: "Adrak", price: 25 },
];

const cities: readonly string[] = ["Delhi", "Jaipur"];

// cities.push("Pune") error beacuse of readonly

// 2D Array
const table: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

// tuple

let chaiTuple: [string, number];
chaiTuple = ["Kashmiri", 20];
// chaiTuple = [20 , "Masala"]  order of types in important

// optional types in tuple
let userInfo: [string, number, boolean?];
userInfo = ["momin", 100];
userInfo = ["momin", 100, true];

const location: readonly [number, number] = [28.66, 32.22];

// Named tuple
const chaiItems: [name: string, price: number] = ["Kashmiri", 25];

// an enum (enumeration) is a way to define a set of named constant values.
enum CupSize {
  SIZE,
  MEDIUM,
  LARGE,
}

const size = CupSize.LARGE;

enum Status {
  PENDING = 100,
  // automatic value given
  SERVED, // 101
  CANCELLED, //102
}

enum ChaiType {
  MASALA = "masala",
  GINGER = "ginger",
}

function makeChai(type: ChaiType) {
  console.log(`Making ${type}`);
}

makeChai(ChaiType.GINGER);

// makeChai("masala")

// for Hetrogenous values it is not a good practice

enum RandomChai {
  ID = 1,
  NAME = "chai",
}

const enum Sugars {
  LOW = 1,
  MEDIUM = 2,
  HIGH = 3,
}

// const s = Sugars.HIGH;
 
let t : [string , number] = ["chai" ,18]
t.push("extra");

console.log(t); // [ 'chai', 18, 'extra' ]

