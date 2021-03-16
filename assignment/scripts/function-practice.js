console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
let question = 1;
console.log(`%cQuestion #${question}`, 'background:blue');
question++;

function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, for example 'Hello, Jo!'
console.log(`%cQuestion #${question}`, 'background:blue');
question++;

function helloName(name) {
  return `Hello, ${name}!`;
}
// Remember to call the function to test
console.log(helloName('John'));

// 3. Function to add two numbers together & return the result
console.log(`%cQuestion #${question}`, 'background:blue');
question++;

function addNumbers(firstNumber, secondNumber) {
  //Tests to if input is number to prevent errors
  if (typeof firstNumber === 'number' && typeof secondNumber === 'number') {
    // return firstNumber + secondNumber;
    return firstNumber + secondNumber;
  } else {
    return 'Invalid input';
  }
}

//Tests for possible input values
console.log('Test #1 for addNumbers(1, 2):' + addNumbers(1, 2));
console.log('Test #2 for addNumbers(1, -2):' + addNumbers(1, -2));
console.log('Test #3 for addNumbers(-1, 2):' + addNumbers(-1, 2));
console.log('Test #4 for addNumbers(-1, -2):' + addNumbers(-1, -2));
console.log('Test #5 for addNumbers(Math.PI, 2):' + addNumbers(Math.PI, 2));
console.log('Test #6 for addNumbers(\'one\', \'two\')' + addNumbers('one', 'two'));
console.log('Test #7 for addNumbers(true, false)' + addNumbers(true, false));
console.log('Test #8 for addNumbers(1, \'two\')' + addNumbers(1, 'two'));

// 4. Function to multiply three numbers & return the result
console.log(`%cQuestion #${question}`, 'background:blue');
question++;

function multiplyThree(number) {
  //Tests to only accept numbers as input to prevent errors
  if (typeof number === 'number') {
    number = number * 3;
    return number;
  } else {
    return 'Invalid input';
  }
}

//varaible used to count incrementally number each test
let test = 1;

//tests various possible input values
console.log(`Test #${test} for multiplyThree(2):`, multiplyThree(2));
test++;
console.log(`Test #${test} for multiplyThree(-2):`, multiplyThree(-2));
test++;
console.log(`Test #${test} for multiplyThree(0):`, multiplyThree(0));
test++;
console.log(`Test #${test} for multiplyThree(Math.PI):`, multiplyThree(Math.PI));
test++;
console.log(`Test #${test} for multiplyThree(\'two\'):`, multiplyThree('two'));
test++;
console.log(`Test #${test} for multiplyThree(true):`, multiplyThree(true));
test++;

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
console.log(`%cQuestion #${question}`, 'background:blue');
question++;

function isPositive(number) {
  //Tests to only accept numbers as input to prevent errors
  if (typeof number === 'number') {
    //Determins if number is positive
    if (number > 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return 'Invalid input';
  }
}

//varaible used to count incrementally number each test
test = 1;

//tests various possible input values
console.log(`Test #${test} for isPositive(2)`, isPositive(2));
test++;
console.log(`Test #${test} for isPositive(-2)`, isPositive(-2));
test++;
console.log(`Test #${test} for isPositive(0)`, isPositive(0));
test++;
console.log(`Test #${test} for isPositive(Math.PI)`, isPositive(Math.PI));
test++;
console.log(`Test #${test} for isPositive(\'two\')`, isPositive('two'));
test++;
console.log(`Test #${test} for isPositive(true)`, isPositive(true));
test++;
//oops I didn't realize there were already tests for multiple inputs.
// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log('isPositive - should say true', isPositive(3));
console.log('isPositive - should say false', isPositive(0));
console.log('isPositive - should say false', isPositive(-3));


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
console.log(`%cQuestion #${question}`, 'background:blue');
question++;

function getLast(array) {
  if (array != undefined && array.length > 0) {
    return array[array.length - 1];
  } else {
    return undefined;
  }
}

//declares variables and assigns values for various input types
let numArray = [1, 2, 0, -5, 4];
let strArray = ['This', 'will', 'be', 'used', 'to', 'test', 'getLast()'];
let booArray = [true, true, false, true, false, false];
let emptyArray;

//varaible used to count incrementally number each test
test = 1;

//tests various possible input values
console.log(`Test #${test} for getLast(numArray):`, getLast(numArray));
test++;
console.log(`Test #${test} for getLast(strArray):`, getLast(strArray));
test++;
console.log(`Test #${test} for getLast(booArray):`, getLast(booArray));
test++;
console.log(`Test #${test} for getLast(emptyArray):`, getLast(emptyArray));
test++;
console.log(`Test #${test} for getLast(arrayWithoutVariable):`, getLast([1, 2, 4, true, '#working!']));
test++;

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
console.log(`%cQuestion #${question}`, 'background:blue');
question++;

function find(value, array) {
  if (value != undefined && array != undefined) {
    //loop to search array for value
    for (let i = 0; i < array.length; i++) {
      if (value === array[i]) {
        //retruns true if found
        return true;
      }
    }

    //returns false if not found in loop
    return false;
  } return false;
}

//varaible used to count incrementally number each test
test = 1;

let empty;

//tests various possible input values
console.log(`Test #${test} for find(-5, numArray):`, find(-5, numArray));
test++;
console.log(`Test #${test} for find(9, numArray):`, find(9, numArray));
test++;
console.log(`Test #${test} for find(\'test\', strArray):`, find('test', strArray));
test++;
console.log(`Test #${test} for find('\#fail\', numArray):`, find('#fail', strArray));
test++;
console.log(`Test #${test} for find(true, booArray):`, find(true, booArray));
test++;
console.log(`Test #${test} for find(-5, booArray):`, find(-5, booArray));
test++;
console.log(`Test #${test} for find(empty, booArray):`, find(empty, booArray));
test++;
console.log(`Test #${test} for find(-5, emptyArray):`, find(-5, emptyArray));
test++;

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
console.log(`%cQuestion #${question}`, 'background:blue');
question++;

function isFirstLetter(letter, string) {
  let firstLetter = string.charAt(0);
  if (letter === firstLetter) {
    return true;
  } else {
    return false;
  }
}
console.log('isFirstLetter - should say true', isFirstLetter('a', 'apple'));
console.log('isFirstLetter - should say false', isFirstLetter('z', 'apple'));

// 9. Function to return the sum of all numbers in an array
console.log(`%cQuestion #${question}`, 'background:blue');
question++;

function sumAll(array) {
  let sum = 0
  // TODO: loop to add items
  for (value of array)
    sum+= value;
  return sum;
}
console.log(sumAll(numArray));
console.log(sumAll([1,1,2,3,5,8,13]));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
console.log(`%cQuestion #${question}`, 'background:blue');
question++;

let testArray = [1,-2,3,-4,5,-6,7,-8,9,0];

function isPositive(value) {
  return value > 0;
}

let posArray = testArray.filter(isPositive);
console.log( `Test array is: ${testArray}`);
console.log(`Array of positive numbers in test array is: ${posArray}`);

// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!

/************************************************************************
** Additive persistance is the number of times the digits of a number  **
** must be added together until the sum is a single digit number.      **
** Multiplicative persistance is the number of times the digits of a   **
** number must be multiplied together before the product is a single   **
** digit number.                                                       **
** Write a function that finds both the additive and multiplicative    **
** persistance of a given number.                                      **
** https://edabit.com/challenge/vHvu4Wis8RhmQbwXm                      **
************************************************************************/

// addPer = 0 to start counting
let addPer = 0;

// test if one digit
const isSingleDigit = value => ((value.toString()).length === 1) ?  true : false;

console.log(isSingleDigit(3));
console.log(isSingleDigit(13));
console.log(isSingleDigit(123));
console.log(isSingleDigit(1));
console.log(isSingleDigit(8));
console.log(isSingleDigit(0));

// add digits of multi digit number

  // increment n

// repeat test

// return addPer
