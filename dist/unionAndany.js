"use strict";
// let subs : number | string = '10'
Object.defineProperty(exports, "__esModule", { value: true });
let subs = "1M";
// Literal types in TypeScript allow you to specify exact values that variables can hold,
let apiRequestStatus = "pending";
let airlineSeat = "aisle";
airlineSeat = "aisle";
const orders = ["12", "20", "28", "42"];
let currentorder;
// let currentorder = any;
for (let order of orders) {
    if (order === "28") {
        currentorder = order;
        break;
    }
    currentorder = "11";
}
// currentorder = 42
console.log(currentorder);
/*
Unknown is one of those types that once it clicks, you
can find quite a lot of uses for it. It acts like a sibling
to the any type. Where any allows for ambiguity - unknown
requires specifics.
*/
// Unknown is safer than any
//# sourceMappingURL=unionAndany.js.map