// types in parameter
function makeChai(type: string, cups: number) {
  console.log(`Making ${cups} cups of ${type}`);
}

makeChai("Masala", 2);

// type in return value
function getChaiPrice(): number {
  return 25;
}

function makeOrder(order: string) {
  if (!order) return null;
  return order;
}

// for void return type

function logChai(): void {
  console.log("Chai is ready");
}

// optional params

function greet(name: string, message?: string) {
  console.log("Hello", name);

  if (message) {
    console.log(message);
  }
}

// function with complex types

function createChai(order: {
  type: string;
  sugar: number;
  size: "small" | "large";
}): number {

  return 4
}
