"use strict";
// Type Narrowing
// Type narrowing in TypeScript refers to refining the type
// of a variable within a conditional block based on runtime checks. 
Object.defineProperty(exports, "__esModule", { value: true });
function getChai(kind) {
    if (typeof kind === 'string') {
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
console.log("success");
//# sourceMappingURL=typeNarrowing.js.map