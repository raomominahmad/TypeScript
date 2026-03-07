interface Chai {
  flavour: string;
  price: number;
  milk?: boolean;
}

const masala: Chai = {
  flavour: "masala",
  price: 30,
};

interface Shop {
  readonly id: number;
  name: string;
}

const s: Shop = { id: 1, name: "Chaicode caffe" };

// s.id= 3 readonly

// function in form of interface
interface DiscountCalculator {
  // (parameter) : return type
  (price: number): number;
}

const apply50: DiscountCalculator = (p) => p * 0.5;

interface TeaMachine {
  start(): void;
  stop(): void;
}

const machine: TeaMachine = {
  start() {
    console.log("start");
  },
  stop() {
    console.log("stop");
  },
};

// index signature
// index signature allows you to define dynamic property names f
// or an object when you don’t know all the keys in advance.

interface ChaiRating {
  [flavour: string]: number;
}

const ratings: ChaiRating = {
  masala: 4.5,
  ginger: 4.5,
};

// all interface properties are merged

interface User {
  name: string;
}

interface User {
  age: number;
}

const u: User = {
  name: "momin",
  age: 22,
};

interface A {
  a: string;
}
interface B {
  b: string;
}

interface C extends A, B {}

