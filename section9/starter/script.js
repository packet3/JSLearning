'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

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
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time, address }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your paster order with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza: function (mainIng, ...otherIngs) {
    console.log(mainIng);
    console.log(otherIngs);
  },
};

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) {
  console.log(item);
}

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

console.log([...menu.entries()]);

//LOGICAL ASSIGNMENT OPERATOR

// const rest1 = {
//   name: 'Capri',
//   //numGuests: 20,
//   numGuests: 0,
// };

// const rest2 = {
//   name: 'Maxi',
//   owner: 'Joe',
// };

// OR assignment operator
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests = rest1.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// nullish assignment operator (null or undefined)
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// rest2.owner &&= 'Anon owner';

// console.log(rest1, rest2);

//COALESCE OPERATOR ??

// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// // Nullish: null and undefined (NOT 0 or '')
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

// Logical operators (short cicuting (|| and &&))

// Use any data type, return any data type, short-circuting
// console.log('----- OR ---');
// console.log(3 || 'Joe');
// console.log('' || 'Joe');
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// restaurant.numGuests = 0;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log('----- AND ---');
// console.log(0 && 'Joe');
// console.log(7 && 'Joe');
// console.log('Hello' && 23 && null && 'joe');

// //practicel exapmple
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('Mushrooms', 'spinache');
// }

// restaurant.orderPizza && restaurant.orderPizza('Mushrooms', 'spinache');

//restaurant.orderPizza('muchrooms', 'onion', 'chicken');
//REST PATTERN AND PARAMTERS
//SPREAD, because on RIGHT side of =
// const arr = [1, 2, ...[3, 4]];

// //REST, Becuase on LEFT side of the =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// // Objects
// const { sat, ...weekdays } = { ...restaurant.openingHours };

// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };

// add(1, 2);
// add(1, 2, 3, 4, 5);
// add(4, 7, 2, 4);

// const x = [23, 5, 7];
// add(...x);

//SPREAD OPERATOR///
// const arr = [7, 8, 9];
// const newArr = [1, 2, ...arr]; // spread operator
// console.log(newArr);

// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// // Copy Array
// const mainMenuCopy = [...restaurant.mainMenu];

// // Join 2 arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// // Iterables:  arrays, strings, maps, sets. but not objects
// const str = 'Joe';
// const letters = [...str];
// console.log(letters);

// real world example
// const ings = [
//   prompt("Let's make pasta! Ing 1?"),
//   prompt("Let's make pasta! Ing 2?"),
//   prompt("Let's make pasta! Ing 3?"),
// ];
// console.log(ings);
// restaurant.orderPasta(...ings);

// Objects
// const newResturant = { ...restaurant, founder: 'Max' };
// console.log(newResturant);

// const resturantCopy = { ...restaurant };
// resturantCopy.name = 'Joey';
// console.log(resturantCopy);

//DESTRUCTING OBJECTS
// restaurant.orderDelivery({
//   time: '23:30',
//   address: '9 croft common',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// // default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // Mutating Variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
// console.log(a, b);

// // nested objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

//////////////////////
//Destructuring Arrays

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr; // destructing an array es6
// console.log(x, y, z);
// console.log(arr);

// let [main, second] = restaurant.categories;
// console.log(main, second);

// [main, second] = [second, main]; // switching variables
// console.log(main, second);

// // recieve 2 return values from a function
// const [starter, mains] = restaurant.order(2, 0);
// console.log(starter, mains);

// // Nested destructuing
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Default values
// const [p = 1, q = 1, r = 1] = [8];
// console.log(p, q, r);
