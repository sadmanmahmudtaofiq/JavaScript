"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },

    sat: {
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


