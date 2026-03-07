"use strict";
// Type Narrowing
// Type narrowing in TypeScript refers to refining the type
// of a variable within a conditional block based on runtime checks.
Object.defineProperty(exports, "__esModule", { value: true });
function getChai(kind) {
    if (typeof kind === "string") {
        return `Making ${kind} chai..`;
    }
    return `Chai order: ${kind}`;
}
// Finding Truthiness
function name(msg) {
    if (msg) {
        return `Serving ${msg}`;
    }
    return `Serving default masala chai`;
}
// Exhaustive Checks
function orderChai(size) {
    if (size === "small") {
        return `small cutting chai`;
    }
    if (size === "medium") {
        return `make extra chai`;
    }
    return `chai order #${size}`;
}
class KashmiriChai {
    serve() {
        return `Serving Kashmiri Chai`;
    }
}
class Cutting {
    serve() {
        return `Serving cutting chai`;
    }
}
function serve(chai) {
    if (chai instanceof KashmiriChai) {
        return chai.serve;
    }
}
function isChaiOrder(obj) {
    return (typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number");
}
function serveOrder(item) {
    if (isChaiOrder(item)) {
        return `Serving ${item.type} with ${item.sugar}`;
    }
    return `Serving custom chai: ${item}`;
}
function MakeChai(order) {
    switch (order.type) {
        case "masala":
            return "Masala Chai";
        case "ginger":
            return "Masala Chai";
        case "elaichi":
            return "Masala Chai";
        // code is so precise no defualt case is required but still it is best practice to use default
        // default:
        //   break;
    }
    function brew(order) {
        if ("spicelevel" in order) {
            // only masala chai has this type so is is checked like this
        }
    }
}
// function isStringArray(arr: unknown): arr is string[] {
//     // function paramter is unknown means it will get a specific type in future
// }
//# sourceMappingURL=typeNarrowing.js.map