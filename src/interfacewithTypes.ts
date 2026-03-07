type ChaiOrder = {
  type: string;
  sugar: number;
  strong: boolean;
};

function name(order: ChaiOrder) {
  console.log(order);
}

function serveChai(order: ChaiOrder) {
  console.log(order);
}

type TeaRecipe = {
  water: number;
  milk: number;
};

// class masalaChai implements TeaRecipe {
//   water = 100;
//   milk = 50;
// }

interface CupSize {
  size: "small" | "large";
}

// type CupSize = "small" | "large";

// Classes cannot implement a union type like this.
// The `implements` keyword only works with object-like types
// (usually interfaces or object type aliases), not with primitive unions.
// A primitive union means a union type made from primitive values or primitive types.

class Chai implements CupSize {
  size: "small" | "large" = "large";
}

interface Response {
  ok: true | false;
}

class myRes implements Response {
  ok: true | false = true;
}

// literal type

type TeaType = "masala" | "ginger" | "lemon";

function orderChai(t: TeaType) {
  console.log(t);
}

// Intersection
type BaseChai = { teaLeaves: number };

type Extra = { masala: number };

type MasalaChai = BaseChai & Extra;

const cup: MasalaChai = {
  teaLeaves: 2,
  masala: 1,
};

type User = {
  username: string;
  bio?: string;
};

const u1: User = { username: "Momin" };
const u2: User = { username: "mominahmadrao", bio: "Student" };

type Config = {
  readonly appName: string;
  version: number;
};

const cfg : Config = {
    appName : "ChatApp",
    version: 3
}

// cfg.appName = "AnotherAppName"
