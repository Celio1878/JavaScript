/** Add git and github repository
 * git init
 * git add README.md
 * git commit -m "first commit"
 * git remote add origin git@github.com:USER/PROJECT.git
 * git push -u origin master
*/

/** The function 'typeof' is to see from variable type */
let any = 20;
console.log(typeof any, any);

/**
 *  The function '.parseInt("", "")' convert to integer
 *  The function '.parseFload("")' convert to float
 *  The function '.toString()' convert the values to strings
 *    but also converts numbers to other forms like binary, ternary, etc
*/
let letter = '20';
let number = parseInt('20');
console.log(typeof letter, letter);
console.log(typeof number, number);

/** The function 'charAt()' search the position from the element
 *  .toFixed() decreases the number of decimal places of a number
 *
 *  The Function 'charCodeAt()' search the position from a element in the table ASCII
 *     let position = 'My name is Godfrey';
 *     console.log (position.chartAt(5));
*/
let position = 'My name is Bubsure';
console.log(`The 5th letter in the snippet - ${position} - is: ` + position.charAt(5)
   + ', and in table ASCII the position is: ' + position.charCodeAt(5));

/**
 *  .indexOf() e .search() are similar - both search the index on a element -
 *     but the diference is what the function .search() accept regExp (Regular Expression "//") -
 *     and the tag '//g' select all defined elementos, without tag, at the first element is selected


 *  The function '.match()' return a regular expression
 *     .match(/[a-z]/g) return all the tiny caracters on the string
*/
console.log(`The tiny letters contained in the snippet above are: ${position.match(/[a-z]/g)}`);

//The function .replace() replaces the value with another
console.log(position.replace('Bubsure', 'Pentest'));
console.log(`The letter 'u' in the snippet above it will be replaced with 'i': ${position.replace(/u/g, 'i')}`);


//The function .slice() and .substring() slice the string
console.log(`The name of the sir are ${position.slice(11, 19)} ?`);

//The function .split() split the snippet for element selected, maybe be limited
console.log(position.split(' ', 3));

/**
 *  The function .toUpperCase() and .toLowerCase()
 *     transform all caracters in upper and lowercase, respectively.
*/

// Output alert input
//    const name = prompt ("Type your name");

// Write inside HTML
//    document.body.innerHTML += 'Got it, your name is: <br/>';

// Write information in the screen
//    document.write(`${name} <br/>`);

/**
 * Math.floor() rounds the value down -> ex: Math.floor(10.2) = 10
 * Math.ceil() rounds the value up -> ex: Math.ceil(10.6) = 11
 * Math.round() automatically rounds
 *    -> Math.round(10.5) = 11
 *    -> Math.round(10.49) = 10
*/

// Select html ID
const text = document.getElementById('root');

// Insert content into selected ID
//    text.innerHTML = `Your name is ${name}.`;

// Inserts element at end of array
const shoppingList = ['Desktop', 'Raspberry', 'Iphone'];
shoppingList.push('Ipad');

// Add element at the beginning of the array
shoppingList.unshift('Macbook Pro');

console.log(shoppingList);

// Remove last element from array
const removeLast = shoppingList.pop();

// Remove first element from array
const removeFirst = shoppingList.shift();

// Remove elements without changing array position
delete shoppingList[2];

console.log(removeLast);
console.log(removeFirst);
console.log(shoppingList);

// .slice('', '') break the elements inside the array

// instanceof = return object instance type
console.log(shoppingList instanceof Array);
console.log(shoppingList instanceof Object);

// Simple summation function
function soma(x, y) {
   const result = x + y;

   return result;
}
console.log(soma(3, 20));

/**
 * Anonymous function applied with ARROW FUNCTION
 * When there is only one parameter, no parentheses, keys and RETURN needed
*/
const root = num => num ** 0.5;
console.log(root(9));
console.log(root(26));

// Function that returns an object
function createUser(name, lastName, age) {
   return {
      name,
      lastName,
      age
   };
}
const user = createUser('Célio', 'Vieira', 26)
const user1 = createUser('Vanessa', 'Schueng', 26)
console.log(user.name, user.age);
console.log(user1.name, user.age);

// Objects with attributes and methods
const user = {
   name: 'Célio',
   lastName: 'Vieira',
   age: 26,

   inform() {
      console.log(`${this.name} ${this.lastName} have ${this.age} years old!!!`);
   },
   increasesAge() {
      this.age++;
      console.log(`And next year he will have ${this.age}`);
   }
};
user.inform();
user.increasesAge();

/**
 * Primitive data types = Unchanging values
 *    string, number, boolean, undefined, null (bigint, symbol)
 * Datatypes by reference
 *    array, object, function
*/

/**
 * "..." returns previously used contents
 * Primitive values are copied
 * Values passed by reference point to storage locations
*/

function scope() {
   const form = document.querySelector('.form');
   const result = document.querySelector('.result');

   const users = [];

   /**
    * form.onsubmit = event => {
    *    event.preventDefault();
    *    alert ('Sent');
    *    console.log ('Form submitted');
    * };
   */

   function receiveEvent(e) {
      e.preventDefault();

      const name = form.querySelector('.name');
      const lastName = form.querySelector('.lastName');
      const weight = form.querySelector('.weight');
      const height = form.querySelector('.height');

      users.push({
         name: name.value,
         lastName: lastName.value,
         weight: weight.value,
         height: height.value
      })

      console.log(users);

      result.innerHTML +=
         `<p>
            The user ${name.value} ${lastName.value} weigh ${weight.value} kg and have ${height.value} m.
         </p>`
   }

   form.addEventListener('submit', receiveEvent);

}
scope();

// Ternary operator (for simple conditionals)
// (conditional) ? 'Value for True' : 'Value for False';
const pointUser = 9;
const levelUser = pointUser >= 8 ? 'VIP User' : 'Normal User';

const colorUser = null;
const colorPattern = colorUser || 'Black';

console.log(levelUser, colorPattern);

// Function with object DATA
const date = new Date();

console.log(date.toString());
console.log('Day', date.getDate());
console.log('Month', date.getMonth());
console.log('Year', date.getFullYear());
console.log('Hour', date.getHours());
console.log('Minutes', date.getMinutes());
console.log('Seconds', date.getSeconds());
console.log('Miliseconds', date.getMilliseconds());
console.log('Day of the week', date.getDay());

function zeroLeft(num) {
   return num >= 10 ? num : `0${num}`;
}

// Formatar date
function formatDate(date) {
   const day = zeroLeft(date.getDate());
   const month = zeroLeft(date.getMonth() + 1);
   const year = zeroLeft(date.getFullYear());
   const hour = zeroLeft(date.getHours());
   const min = zeroLeft(date.getMinutes());
   const sec = zeroLeft(date.getSeconds());

   return `${day}/${month}/${year} -${hour}:${min}:${sec}`
}

const dateCommom = formataData(date);
console.log(dateCommom);

// Switch Case
const date = new Date('1993-10-20 00:00:00');
let dayWeek = date.getDay();
let dayWeekText;

switch (dayWeek) {
   case 0:
      dayWeekText = 'Sunday';
      break;
   case 1:
      dayWeekText = 'Monday';
      break;
   case 2:
      dayWeekText = 'Tuesday';
      break;
   case 3:
      dayWeekText = 'Wednesday';
      break;
   case 4:
      dayWeekText = 'Thursday';
      break;
   case 5:
      dayWeekText = 'Friday';
      break;
   case 6:
      dayWeekText = 'Saturday';
      break;
   default:
      dayWeekText = "It's not a valid day";
}

console.log(date, dayWeek, dayWeekText);

/** Objects */

const user = {
   name: 'Célio',
   lastName: 'Viana',
   tel: '(31) 994084772',
   job: 'Dev'
}

// Rescue the keys of the object //
console.log('Props of the object "user":\n ', Object.keys(user));

// Rescue the values of the keys of the object //
console.log('\n Values of the props of the object "user":\n ', Object.values(user));

// Return a array of the arrays content [ name_prop, value_prop ] //
console.log('\n List of the props and values: \n', Object.entries(user));

// Merge props of the objects //
Object.assign(user, { fullName: 'Célio Vieira Viana' });

console.log('\n Add the prop "fullName" in the object "user" \n', user);
console.log('\n Return a new object merging two or more objects \n', Object.assign({}, user, { age: 26 }));

console.log(user);

// Prevent all the alterations in a object //
const newObj = { foo: 'bar' };
Object.freeze(newObj);

newObj.foo = 'changes',
   delete newObj.foo;
newObj.bar = 'foo';

console.log('\n Variable "newObj" after the alteration: \n', newObj);

// Allow only the alteration of the props existing in a object //
const person = { name: 'Célio' };
Object.seal(person);

person.name = 'Célio Vieira';
delete person.name;
person.age = 26;

console.log('\n Variable "person" after the alterations: \n', person);

/** Symbols */

const symbol = Symbol();
const symbol1 = Symbol();

// Symbols are unics //
console.log('\n symbol is equal the symbol1: \n', symbol === symbol1);

// Prevent conflict between names of property //
const nameSymbol = Symbol('name');
const nameSymbol1 = Symbol('name');

const userSymbol = {
   [nameSymbol]: 'Célio',
   [nameSymbol1]: 'Celin',
   lastName: 'Viana'
}

console.log('\n' + userSymbol + '\n');

// Symbols create property what aren't enumberables //
for (const key in userSymbol) {
   if (userSymbol.hasOwnProperty(key)) {
      console.log(`\n Value of the key ${key}: ${userSymbol[key]} \n`);
   }
}

console.log('\n Properties of the object "userSymbol": \n', Object.keys(userSymbol));
console.log('\n Values of properties of the object "userSymbol": \n', Object.values(userSymbol));

// Show symbols of a object //
console.log('\n Symbols registered in the object "userSymbol": \n', Object.getOwnPropertySymbols(userSymbol));

// Accessing all properties in the object //
console.log('\n All properties in the object "userSymbol": \n', Reflect.ownKeys(userSymbol));

// Create a enum //
const directions = {
   UP: Symbol('UP'),
   DOWN: Symbol('DOWN'),
   LEFT: Symbol('LEFT'),
   RIGHT: Symbol('RIGHT')
};

// Spread Operator (...) //
const arrows = ['up', 'down', 'left', 'right'];
const keys = ['numbers', 'numlock', ...arrows];

console.log(keys);

keys.forEach(item => {
   if (item == String) {
      console.log(`\n The item ${item} is string. \n`);
   } else {
      console.log(`\n The item ${item} isn't a string. \n`, typeof item, keys instanceof Array);
   }
});

keys.forEach(item => {
   (item === String) ? console.log(`\n Ternary Operator \n O item ${item} é string. \n`)
      : console.log(`\n Ternary Operator \n The item ${item} isn't a string. \n`, typeof item, keys instanceof Array)
});

/**
 * Prototype storage information of the classes
 * __proto__ -> prototype -> constructor
 *
 * function animal(){}
 *    -> animal.constructor
 *       -> Function
 *          -> Function.prototype.constructor
 *             -> Object(){} -> Object.prototype = null
*/

function Person(name) {
   this.name = name;

   /** If "return" explicited, isn's returned the object
    * return {
    *    name: "Josh"
    * };
   */
}

const person = new Person('Célio')

console.log(person);

function Dog() { }
Dog.prototype.bark = function () { }

const dog = new Dog()
dog.__proto__
Dog.prototype.test = function () { }
dog.__proto__

console.log(dog, dog.__proto__, dog.prototype);
console.log(Dog, Dog.__proto__, Dog.prototype);

// Propotypes are native code //

/** "#" -> Access modifier in javascript
 *    Inserted in Classes
*/

/** Static
 *    Allows access to features not in the class
*/

/** Design Pattern
 *    Are patterns for design troubleshooting
 *
 *    Format
 *       -> Name
 *       -> Exemple
 *       -> Context
 *       -> Problem
 *       -> Solution
 *
 *    Types
 *       -> Creation
 *          -> Abstract Factory
 *          -> Builder
 *          -> Factory Method
 *          -> Prototype
 *          -> Singleton
 *
 *       -> Structural
 *          -> Adapter
 *          -> Bridge
 *          -> Composite
 *          -> Decorator
 *          -> Facade
 *          -> Business Delegate
 *          -> Flyweight
 *          -> Proxy
 *
 *       -> Behavior
 *          -> Chain of Responsibility
 *          -> Command
 *          -> Interpreter
 *          -> Iterator
 *          -> Mediator
 *          -> Observer
 *          -> State
 *          -> Strategy
 *          -> Template Method
 *          -> Visitor
*/

// Array.from() -> Transform element in array

/**
 * Array.splice('exclude', 'inserts from', 'elements') -> Remove and insert elements in array
*/

/** Array.forEach ((value, index) =>
 *    console.log(index, value))
*/
const fruits = ['papaya', 'melon', 'apple'];
fruits.splice(2, 1, 'strawberry');

fruits.forEach((fruit, index, arr) =>
   console.log(index, fruit, arr))

// Return new array iteract
fruits.map((fruit, index) =>
   console.log(`${index} + ${fruit}`))

// Array.flat('level') -> generate a new array with the elements of a subset in the main array

// Array.flatMap() -> is the junction of the two functions - .flat() and .map()

/** Array.keys() -> returns an iterator array that contains the keys for each array element
 *    Array.next();
 *       {value: 1, done: false}
*/

// Array.values() -> returns an iterator array that contains the values for each array element

// Array.entries() -> returns an iterator array that contains the keys/values for each array element

// Array.find('value') -> returns element that satisfies a condition

// Array.findIndex('value') -> returns index that satisfies a condition

// Array.filter('value') -> returns all elements that satisfies a condition

// Array.indexOf('value') -> return the first occurrence of a value

// Array.lastIndexOf('value') -> return the last occurrence of a value

// Array.includes('value') -> return if value inside of array

// Array.some('value') -> return if some element inside of array satisfies a condition

// Array.every('value') -> return if every element inside of array satisfies a condition

// Array.sort(current, next) -> order elements

// Array.reverse() -> reverse order elements

// Array.join('delimiter') -> return string with delimiter

// Array.reduce(iterator, value) -> Return a new datatype interating each position of an array
