"use strict";

const weeks = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    [weeks[3]]: {
      open: 12,
      close: 22,
    },
    [weeks[4]]: {
      open: 11,
      close: 23,
    },

    [weeks[6]]: {
      open: 0, // Open 24 hour
      close: 24,
    },
  },

  order: function (startIndex, mainIndex) {
    return ([this.starterMenu[startIndex]], this.mainMenu[mainIndex]);
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(sat, weekdays);

// Functions
/* const add = (...otheres) => {
  let sum = 0;
  for (let i = 0; i < otheres.length; i++) {
    sum += otheres[i];
  }
  console.log(sum);
};

add(1, 2, 3, 4, 5);
add(12, 45, 676, 76, 3, 187);

const x = [10, 20, 30, 40, 50, 60, 70, 80, 90];
add(...x);

restaurant.orderPizza("mushrooms", "onion", "olives", "spinach");
*/

// var result = "TAOFIQQ" && "SADMAN";
// console.log(result);

// const rest1 = {
//   name: "Capri",
//   numGuests: 20,
// };
// const rest2 = {
//   name: "La Piazza",
//   owner: "Giovanni Rossi",
// };

/* OR */
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

/* NULISH */
// rest1.numGuests = rest1.numGuests ?? 10;
// rest2.numGuests = rest2.numGuests ?? 10;
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

/* && */
// rest1.owner = rest1.owner && "<ANONYMOUS>"
// rest2.owner = rest2.owner && "<ANONYMOUS>"
// rest1.owner &&= "<ANONYMOUS>"
// rest2.owner &&= "<ANONYMOUS>"

// console.log(rest1);
// console.log(rest2);

// for of loop:

/* let names = [
  "Italian",
  "Pizzeria",
  "Vegetarian",
  "Organic",
  "Focaccia",
  "Bruschetta",
  "Garlic Bread",
  "Caprese Salad",
];

const shoppingCart = [
  { item: "Laptop", price: 1200 },
  { item: "Headphones", price: 200 },
  { item: "Mouse", price: 50 },
];

const numbers = [10, 20, 30, 6, 0, 65, 65, 0, 0, 4, 4, 65, 51, 465, 54];

let total = 0;
for (const nums of numbers) {
  total += nums;
}

console.log(total);

for (const [ind, ele] of names.entries()) console.log(`${ind + 1}: ${ele}`); */

// for in loop (runs for objects)

/* const person = { name: "Alice", age: 25 };
for (let key in person) {
  console.log(key, person[key]);
}
 */

// SETS

// const orderSet = new Set(["Pasta", "Pizza", "Pizza", "Risotto"]);

// const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];

// const newStuff = [...new Set(staff)];
// console.log(newStuff);

// for (let i = 0; i < newStuff.length; i++) {
//   console.log(newStuff[i]);
// }
//
// const fruits = new Map();

// Set Map Values
// fruits.set("apples", 500);
// fruits.set("bananas", 300);
// fruits.set("oranges", 200);

// console.log(fruits);

const question = new Map([
  ["question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct"],
  [false, "Try again!"],
]);

// console.log(question);

// for (const [key, value] of question) {
//   if (typeof key === "number") console.log(`answer ${key}: ${value}`);
// }

// const answer = 2;
// console.log(question.get(question.get("correct") === answer));

console.log(...question.entries());
console.log(...question.keys());
console.log(...question.values());