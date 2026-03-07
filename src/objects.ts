const chai = {
  // ts always infer types
  name: "Masla chai",
  price: 20,
  isHot: true,
};

let tea: {
  name: string;
  price: number;
  isHot: boolean;
};

tea = {
  name: "Ginger Tea",
  price: 25,
  isHot: true,
};

// alias objects

type Tea = {
  name: string;
  price: number;
  ingredients: string[];
};

const adarakChai: Tea = {
  name: "Adrak Chai",
  price: 25,
  ingredients: ["ginger", "kashmiri"],
};

type Cup = { size: string };

let smallCup: Cup = { size: "200ml" };

let bigCup = { size: "500ml", material: "steel" };

smallCup = bigCup;

console.log(smallCup);

type Brew = {
  brewTime: number;
};

const coffee = { brewTime: 5, beans: "Arabica" };
const chaiBrew: Brew = coffee;

type User = {
  username: string;
  password: string;
};

const u: User = {
  username: "mominahmad",
  password: "123",
};

// split out data types

type Item = { name: string; quantity: number };

type Address = { street: string; pin: number };

type Order = {
  id: string;
  items: Item[];
  address: Address[];
};

// type Chai = {
//   name: string;
//   price: number;
//   isHot: boolean;
// };

// Partial<T> makes all properties of a type optional

const updateChai = (updates: Partial<Chai>) => {
  console.log("Updating chai wirh", updates);
};

updateChai({ price: 25 });
updateChai({ isHot: false });

updateChai({}); // this will cause issues

type ChaiOrder = {
  name?: string;
  quantity?: number;
};

// Required<T> makes all optional properties of a type compulsory

const placeOrder = (order: Required<ChaiOrder>) => {
  console.log(order);
};

placeOrder({
  name: "Kashmiri Chai",
  quantity: 4,
});

type Chai = {
  name: string;
  price: number;
  isHot: boolean;
  ingredients: string[];
};

// Pick<T, K> creates a new type by selecting specific properties K from type T

type BasicChaiInfo = Pick<Chai, "name" | "price">;

const chaiInfo: BasicChaiInfo = {
  name: "Lemon Tea",
  price: 30,
};

type chaiNew = {
  name: string;
  price: number;
  isHot: boolean;
  secretIngredients: string;
};

type PublicChai = Omit<Chai, "secretIngredients">;

