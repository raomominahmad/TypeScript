"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai = {
    // ts always infer types
    name: "Masla chai",
    price: 20,
    isHot: true,
};
let tea;
tea = {
    name: "Ginger Tea",
    price: 25,
    isHot: true,
};
const adarakChai = {
    name: "Adrak Chai",
    price: 25,
    ingredients: ["ginger", "kashmiri"],
};
let smallCup = { size: "200ml" };
let bigCup = { size: "500ml", material: "steel" };
smallCup = bigCup;
console.log(smallCup);
const coffee = { brewTime: 5, beans: "Arabica" };
const chaiBrew = coffee;
const u = {
    username: "mominahmad",
    password: "123",
};
// type Chai = {
//   name: string;
//   price: number;
//   isHot: boolean;
// };
// Partial<T> makes all properties of a type optional
const updateChai = (updates) => {
    console.log("Updating chai wirh", updates);
};
updateChai({ price: 25 });
updateChai({ isHot: false });
updateChai({}); // this will cause issues
// Required<T> makes all optional properties of a type compulsory
const placeOrder = (order) => {
    console.log(order);
};
placeOrder({
    name: "Kashmiri Chai",
    quantity: 4,
});
const chaiInfo = {
    name: "Lemon Tea",
    price: 30,
};
//# sourceMappingURL=objects.js.map