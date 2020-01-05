// Method .bind() -> points to the correct context of the object

// Arrow Function (() => {}) -> context the same as it is inserted

// Lazy Evaluation -> When one of the parameters is not entered correctly in a function

/** Rest and Spread Operator */

function sum() {

   // 'arguments' -> refers to all elements within a function
   console.log(arguments);

   let value = 0;
   for (let i = 0; i < arguments.length; i++) {
      value += arguments[i];
      console.log(value);
   }
   return value;
}
sum(1, 2, 3, 4, 5, 6, 7, 8, 9);

// ... -> Rest Operator and Spread Operator

// Rest
function sum(...args) {
   console.log(...args);
   return args.reduce((acc, value) => acc + value, 0);
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9));

// Arguments doesn't work on Arrow Function

const sum = (a, b, ...rest) => {
   console.log(a, b, rest);
}
sum(1, 2, 3, 4, 5, 6, 7, 8, 9);

//Spread
// strings, arrays, objects and iterate objects
const multiply = (...args) => args.reduce((acc, value) => acc * value, 1);
const sum = (...rest) => {
   return multiply(...rest);
};
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9), typeof rest, typeof args);

const str = 'Course JavaScript Advanced';
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function logArgs(a, b, c, ...args) {
   console.log(a, b, c);
   console.log(args);
}
logArgs(...num, ...str);

const name = {
   name: 'Célio'
};
const tel = {
   ...name,
   tel: 994084772
};

console.log(tel);

// Shallow Clone //
const obj = {
   test: 123,
   subObj: {
      test: 123
   }
};
const obj2 = { ...obj, subObj: { ...obj.subObj } };
obj2.subObj.test = 456;
console.log(obj);
console.log(obj2);

/** Destructuring Assignment */

const arr = [{ name: 'apple', type: 'fruit' }];

let [{ name: fruitName }] = arr;

console.log(arr.name);

function sum({ a, b }) {
   return a + b;
}
console.log(sum({ a: 5, b: 10 }));

let people = [
   {
      name: "Célio Vieira",
      family: {
         mother: "Maria",
         father: "Salvador",
         sister: "Aline"
      },
      age: 26
   },
   {
      name: "Débora",
      family: {
         mother: "Maria",
         father: "Joseli",
         brother: "João"
      },
      age: 25
   }
];

for (let { name, family: { father } } of people) {
   console.log("Name: " + name + ", Father: " + father);
}

/** Generators
 * Symbols and Iterators
*/

// Symbol is a unique identifier
const uniqueId = Symbol();

const obj = {
   [uniqueId]: 'Hello'
};
console.log(obj, Object.getOwnPropertySymbols(obj));

// Well know Symbols
// Symbol.iterator;
// Symbol.split;
// Symbol.toPrimitive;
// Symbol.toStringTag;

const arr = [1, 2, 3, 4, 5];
const str = 'My name is...';
const it = arr[Symbol.iterator]();

// Scrolls through each data of an iterator
// And make every Array and Object iterable
while (true) {
   let { value, done } = it.next()

   if (done) {
      break;
   }

   console.log(value);
}

// After turning the Object, String, and Array into iterable
for (let value of str) {
   console.log(value);
}

const obj = {
   values: [1, 2, 3, 4, 5],
   [Symbol.iterator]() {
      let i = 0;

      return {
         next: () => {
            i++;

            return {
               value: this.values[i - 1],
               done: i > this.values.lenght
            };
         }
      };
   }
};

const it = obj[Symbol.iterator]();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

// After turning the Object, String, and Array into iterable
const arr = [...obj];
console.log(arr);

// Generators are functions with pause
// Generators are identifiers for '*'
function* hello() {
   console.log('Hello');
   yield;

   console.log('Test');
   const value = yield 2;

   console.log(value);

   console.log('Generators');
}
const it = hello();

console.log(it.next());
console.log(it.next());
console.log(it.next('Outside!'));

const obj = {
   values: [1, 2, 3, 4, 5],
   *[Symbol.iterator]() {
      for (let i = 0; i < this.values.length; i++) {
         yield this.values[i];
      }
   }
};
for (let value of obj) {
   console.log(value);
};

// Callbacks
function doSomething(callback) {
   setTimeout(function () {
      // Did Something
      callback('First data');
   }, 1000);
}

function doOtherSomething(callback) {
   setTimeout(function () {
      // Did other thing
      callback('Second data');
   }, 2000);
}

function doAll() {
   try {
      doSomething(function (data) {
         let processedData = data.split('');

         try {
            doOtherSomething(function (otherData) {
               let processedOtherData = otherData.split('');

               try {
                  setTimeout(function () {
                     console.log(processedData, processedOtherData);
                  }, 3000);
               } catch (err) {
                  // Handle error
               }
            });
         } catch (err) {
            // Handle error
         }
      });
   } catch (err) {
      // Handle error
   }
}

doAll();

//Promises
const doSomethingPromise = () =>
   new Promise((resolve, reject) => {

      // Generate error
      // throw new Error('Something went wrong');

      setTimeout(function () {
         // Did something
         resolve('First data');
      }, 1500);
   });

const doOtherThingPromise = () =>
   new Promise((resolve, reject) => {
      setTimeout(function () {
         // Did Something
         resolve('Second data');
      }, 1000);
   });

doSomethingPromise()
   .then(data => {
      console.log(data.split(''));
      return doOtherThingPromise();
   })
   .then(otherData => console.log(otherData.split('')))
   .catch(error => console.log('It happened ERROR!!!', error));

Promise.race([doSomethingPromise(), doOtherThingPromise()])
   .then(data => {
      console.log(data);
   });

// Execute all promises in parallel
Promise.all([doSomethingPromise(), doOtherThingPromise()])
   .then(data => {
      console.log(data);
   });

// Pending -> Waiting execution
// Fulfilled -> When you finished running
// Rejected -> If any mistake happens

/** Fetch, Async / Await and EventEmitter */
// Fetch
fetch ('/data.json', { method: 'POST', body: JSON.stringify })
   .then (responseStream => {
      if (responseStream.status === 200) {
         return responseStream.json();
      } else {
         throw new Error ('Request error');
      }
   })
   .then (data => {
      console.log (data);
   })
   .catch (err => {
      console.log ('Erro: ', err);
   });

// Async / Await

// This code is sequential
const asyncTimer = () =>
   new Promise ((resolve, reject) => {
      setTimeout(() => {
         resolve (12345);
      }, 2000);
   });

const simpleFunc = async () => {
   const data = await asyncTimer();
   console.log (data);
   const dataJSON = await fetch ('/data.json')
      .then (resStream =>
         resStream.json()
      );
   return dataJSON;
};

simpleFunc()
   .then (data => {
      console.log (data);
   })
   .catch (err => {
      console.log (err);
   });

// Now, parallel
const asyncTimer = () =>
   new Promise ((resolve, reject) => {
      setTimeout(() => {
         resolve (12345);
      }, 2000);
   });

const simpleFunc = async () => {
   const data = await Promise.all([
      asyncTimer(),
      fetch ('/data.json')
         .then (resStream => resStream.json())
   ]);

   return data;
};

simpleFunc()
   .then (data => {
      console.log (data);
   })
   .catch (err => {
      console.log (err);
   });

// EventEmitter (exclusive Node)
const EventEmitter = require ('events');

class Users extends EventEmitter {
   userLogged (data) {
      setTimeout(() => {
         this.emit ('User Logged', data);
      }, 2000);
   }
}

const users = new Users();

users.on ('User logged', data => {
   console.log (data);
});

users.userLogged ({ user: 'Célio Vieira'});
users.userLogged ({ user: 'Moo'});
