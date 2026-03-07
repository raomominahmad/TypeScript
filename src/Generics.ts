// Generics allow you to write reusable code that works with different types
// while keeping type safety.

function wrapArray<T>(item: T): T[] {
  return [item];
}

wrapArray("masala");
wrapArray(42);
wrapArray({ flavour: "Ginger" });

function pair<A, B>(a: A, b: B): [A, B] {
  return [a, b];
}

pair("masala", 20);
pair("masala", { flavour: "Ginger" });

// Generic Interface

interface Box<T> {
  content: T;
}

const numberBox: Box<number> = { content: 10 };

const numberBoxCup: Box<string> = { content: "50" };

// Generics are used to build utility types like Partial, Pick, Omit, etc
/* 
Partial<T>
Pick<T, K>
Omit<T, K>
Required<T>
Readonly<T> 
*/

// Generics Practical use

interface ApiPromise<T> {
  status: number;
  data: T;
}

const res: ApiPromise<{ flavour: string }> = {
  status: 200,
  data: { flavour: "masala" },
};
