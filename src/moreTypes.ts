let response: any = "42";

// forceful type assertion
let numericLength: number = (response as string).length;

type Book = {
  name: string;
};

let bookString = '{"name": "Atomic Habits"}';

let bookObject = JSON.parse(bookString) as Book;

console.log(bookObject);

const inputElement = document.getElementById("username") as HTMLInputElement;

// unknown vs any

let value: any;

value = "chai";

value = [1, 2, 3];

value = 2.5;

value.toUpperCase();

let newValue: unknown;

newValue = "chai";
newValue = 2.5;

// Guard for better type checking

if (typeof newValue === "string") {
  newValue.toUpperCase();
}

try {
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  }
  console.log("Error", error);
}

const data: unknown = "chai aur code";
const strData: string = data as string;

// never in ts

type Role = "admin" | "user" | "superadmin";

function redirectBasedOnRole(role: Role):void {
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

function neverReturn ():never {
    while (true) {
        
    }
}