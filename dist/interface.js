"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function name(order) {
    console.log(order);
}
function serveChai(order) {
    console.log(order);
}
// type CupSize = "small" | "large";
// Classes cannot implement a union type like this.
// The `implements` keyword only works with object-like types
// (usually interfaces or object type aliases), not with primitive unions.
// A primitive union means a union type made from primitive values or primitive types.
class Chai {
    size = "large";
}
class myRes {
    ok = true;
}
function orderChai(t) {
    console.log(t);
}
const cup = {
    teaLeaves: 2,
    masala: 1,
};
const u1 = { username: "Momin" };
const u2 = { username: "mominahmadrao", bio: "Student" };
const cfg = {
    appName: "ChatApp",
    version: 3
};
// cfg.appName = "AnotherAppName"
//# sourceMappingURL=interface.js.map