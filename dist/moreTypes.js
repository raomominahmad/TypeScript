"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let response = "42";
// forceful type assertion
let numericLength = response.length;
let bookString = '{"name": "Atomic Habits"}';
let bookObject = JSON.parse(bookString);
console.log(bookObject);
const inputElement = document.getElementById("username");
// unknown vs any
let value;
value = "chai";
value = [1, 2, 3];
value = 2.5;
value.toUpperCase();
let newValue;
newValue = "chai";
newValue = 2.5;
// Guard for better type checking
if (typeof newValue === "string") {
    newValue.toUpperCase();
}
try {
}
catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    }
    console.log("Error", error);
}
const data = "chai aur code";
const strData = data;
function redirectBasedOnRole(role) {
    if (role === "admin") {
        console.log("Redirecting to admin dashboard");
        return;
    }
    if (role === "user") {
        console.log("Redirecting to user dashboard");
        return;
    }
    role;
}
function neverReturn() {
    while (true) {
    }
}
//# sourceMappingURL=moreTypes.js.map