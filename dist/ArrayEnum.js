"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chaiFlavour = ["Masala", "Adrak"];
const chaiPrice = [10, 20];
// Another way of initializing array of type number
const rating = [4.5, 5.0];
// Array of objects
const menu = [
    { name: "Masala", price: 15 },
    { name: "Adrak", price: 25 },
];
const cities = ["Delhi", "Jaipur"];
// cities.push("Pune") error beacuse of readonly
// 2D Array
const table = [
    [1, 2, 3],
    [4, 5, 6],
];
// tuple
let chaiTuple;
chaiTuple = ["Kashmiri", 20];
// chaiTuple = [20 , "Masala"]  order of types in important
// optional types in tuple
let userInfo;
userInfo = ["momin", 100];
userInfo = ["momin", 100, true];
const location = [28.66, 32.22];
// Named tuple
const chaiItems = ["Kashmiri", 25];
// an enum (enumeration) is a way to define a set of named constant values.
var CupSize;
(function (CupSize) {
    CupSize[CupSize["SIZE"] = 0] = "SIZE";
    CupSize[CupSize["MEDIUM"] = 1] = "MEDIUM";
    CupSize[CupSize["LARGE"] = 2] = "LARGE";
})(CupSize || (CupSize = {}));
const size = CupSize.LARGE;
var Status;
(function (Status) {
    Status[Status["PENDING"] = 100] = "PENDING";
    // automatic value given
    Status[Status["SERVED"] = 101] = "SERVED";
    Status[Status["CANCELLED"] = 102] = "CANCELLED";
})(Status || (Status = {}));
var ChaiType;
(function (ChaiType) {
    ChaiType["MASALA"] = "masala";
    ChaiType["GINGER"] = "ginger";
})(ChaiType || (ChaiType = {}));
function makeChai(type) {
    console.log(`Making ${type}`);
}
makeChai(ChaiType.GINGER);
// makeChai("masala")
// for Hetrogenous values it is not a good practice
var RandomChai;
(function (RandomChai) {
    RandomChai[RandomChai["ID"] = 1] = "ID";
    RandomChai["NAME"] = "chai";
})(RandomChai || (RandomChai = {}));
var Sugars;
(function (Sugars) {
    Sugars[Sugars["LOW"] = 1] = "LOW";
    Sugars[Sugars["MEDIUM"] = 2] = "MEDIUM";
    Sugars[Sugars["HIGH"] = 3] = "HIGH";
})(Sugars || (Sugars = {}));
// const s = Sugars.HIGH;
let t = ["chai", 18];
t.push("extra");
console.log(t);
//# sourceMappingURL=ArrayEnum.js.map