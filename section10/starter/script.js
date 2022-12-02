'use strict';

const airlineComp = {
  airline: 'JoeAir',
  iataCode: 'JA',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name });
  },
};

airlineComp.book(239, 'Joe Moore');
console.log(airlineComp);

const eurrowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};
const flightData = [56, 'Kaitie Smith'];
const book = airlineComp.book;
//book(23, 'Max Hacker');
book.call(eurrowings, ...flightData);
console.log(eurrowings);

book.call(airlineComp, 45, 'Smith Smith');
console.log(airlineComp);

// Apply Method

book.apply(eurrowings, flightData);
console.log(eurrowings);

// FUNCTIONS RETURNING FUNCTIONS
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greetArr = greeting => name => console.log(`${greeting} ${name}`);

// //const greeterHey = greet('Hey');
// const greeterHey = greetArr('Hey');
// greeterHey('Joe');
// greeterHey('Max');

// greet('Hello')('Max');

// FUNCTIONS ACCEPTING CALLBACK FUNCTIONS

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// // Higher order function, as it takes in a function as an argument
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);

//   console.log(`Transfered string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);

// // JS Uses callbacks all the time
// const high5 = function () {
//   console.log('👋');
// };

// document.body.addEventListener('click', high5);

// ['Joe', 'Max', 'Hello', 'Max'].forEach(high5);

// const flight = 'LH123';
// const joe = {
//   name: 'joe',
//   passport: 23456768,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH99';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 23456768) {
//     alert('Check in');
//   } else {
//     alert('Wong Passport');
//   }
// };
// checkIn(flight, joe);
// console.log(flight);
// console.log(joe);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 1000000000000000);
// };

// newPassport(joe);
// checkIn(flight, joe);

//DEFAULT PARAMS
// const bookings = [];
// const createBoooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   //ES5 way
//   //   numPassengers = numPassengers || 1;
//   //   price = price || 199;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBoooking('LH123');
// createBoooking('LH123', 12, 3000);
// createBoooking('LH143', 12);
