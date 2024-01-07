//////////////////////
/// Question no 1 ///
////////////////////

//1. **Map Method:**
// - Q:  How does the `map` method work in JavaScript, and can you provide an example of when you might use it to manipulate an array of objects?

const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 40 },
];

const names = people.map((person) => person.name);

console.log(names);




//////////////////////
/// Question no 2 ///
////////////////////

//   2. **Filter Method:**
// - Q: Explain the purpose of the `filter` method. Provide an example where you use `filter` to extract elements from an array based on a specific condition.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter(number => number % 2 === 0);

console.log(evenNumbers);




//////////////////////
/// Question no 3 ///
////////////////////
// 3. **Sort Method:**
// - Q: Discuss the default behavior of the `sort` method for strings and numbers. How would you use a custom comparison function to sort an array of objects by a specific property?

const person = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 40 }
];

const sortedperson = person.sort((a, b) => a.age - b.age);

console.log(sortedperson);



//////////////////////
/// Question no 4 ///
////////////////////
// 4. **Reduce Method:**
// - Q: Describe the purpose of the `reduce` method and provide an example where you use it to compute a single value from an array of numbers.

const num = [1, 2, 3, 4, 5];

const sum = num.reduce((accumulator, currentNumber) => {
  return accumulator + currentNumber;
}, 0);

console.log(sum);



//////////////////////
/// Question no 5 ///
////////////////////
// 5. **Find and Modify:**
// - Q: Given an array of objects with 'id' properties, use the `find` method to locate an object with a specific 'id' and update its 'status' property to 'completed'.
  
let arrayOfObjects = [
  { id: 1, status: 'pending' },
  { id: 2, status: 'in progress' },
  { id: 3, status: 'pending' }
];

function updateStatusById(array, idToUpdate) {
  const objectToUpdate = array.find(obj => obj.id === idToUpdate);

  if (objectToUpdate) {
    objectToUpdate.status = 'completed';
  } else {
    console.log(`Object with id ${idToUpdate} not found.`);
  }
}

updateStatusById(arrayOfObjects, 2);

console.log(arrayOfObjects);





//////////////////////
/// Question no 6 ///
////////////////////
// 6. **Chaining Methods:**
// - Q: Create a chain of array methods to find the average of all positive numbers in an array of mixed integers and return the result rounded to two decimal places.

let mixedArray = [3, -1, 7, -2, 8, -5, 10, -4];

const averageOfPositiveNumbers = mixedArray
  .filter(number => number > 0)          
  .reduce((sum, number, index, array) =>  
    sum + number / array.length, 0)
  .toFixed(2);                            

console.log(`Average of positive numbers: ${averageOfPositiveNumbers}`);





//////////////////////
/// Question no 7 ///
////////////////////

// 7. **Conditional Filtering:**
// - Q: Implement a function that takes an array of objects with 'age' properties and returns an array of those who are adults (age 18 and above) using the `filter` method.

function filterAdults(arrayOfObjects) {
  return arrayOfObjects.filter(person => person.age >= 18);
}

let peopleArray = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 17 },
  { name: 'Charlie', age: 30 },
  { name: 'David', age: 16 }
];

let adultsArray = filterAdults(peopleArray);

console.log("Adults:", adultsArray);



//////////////////////
/// Question no 8 ///
////////////////////
// 8. **Advanced Sorting:**
// - Q: Sort an array of strings based on their lengths in ascending order. If two strings have the same length, maintain their relative order in the sorted array.

let arrayOfStrings = ["apple", "banana", "kiwi", "orange", "pear", "grape"];

let sortedArray = arrayOfStrings.sort((a, b) => a.length - b.length);

console.log("Sorted Array:", sortedArray);



//////////////////////
/// Question no 9 ///
////////////////////
// 9. **Nested Array Operations:**
// - Q: Given an array of arrays containing numbers, use a combination of array methods to flatten the structure and then calculate the sum of all the numbers.

let arrayOfArrays = [[1, 2, 3], [4, 5], [6, 7, 8]];

let sumOfNumbers = arrayOfArrays
  .flat()                   
  .reduce((sum, number) => sum + number, 0);  

console.log("Sum of all numbers:", sumOfNumbers);


///////////////////////
/// Question no 10 ///
/////////////////////
// Custom default object when element is not found
const defaultObject = { id: -1, value: 'Not Found' };

// Modified find method with error handling
function findWithDefault(array, predicate) {
  const result = array.find(predicate);
  return result !== undefined ? result : defaultObject;
}

// Sample array of objects with 'id' properties
let arrayOfObject = [
  { id: 1, value: 'Apple' },
  { id: 2, value: 'Banana' },
  { id: 3, value: 'Orange' }
];

// Example usage: Find object with id 2 or return default object
let foundObject = findWithDefault(arrayOfObject, obj => obj.id === 2);

console.log("Found Object:", foundObject);
