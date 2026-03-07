"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// types in parameter
function makeChai(type, cups) {
    console.log(`Making ${cups} cups of ${type}`);
}
makeChai("Masala", 2);
// type in return value
function getChaiPrice() {
    return 25;
}
function makeOrder(order) {
    if (!order)
        return null;
    return order;
}
// for void return type
function logChai() {
    console.log("Chai is ready");
}
// optional params
function greet(name, message) {
    console.log("Hello", name);
    if (message) {
        console.log(message);
    }
}
// function with complex types
function createChai(order) {
    return 4;
}
//# sourceMappingURL=functions.js.map