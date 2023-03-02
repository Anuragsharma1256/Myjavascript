 // destructive
 // problem 1
// if the number is even and less than 15, print a
// if the number is even and more than 15, print b
// if the number is odd and less than 10, print c
// if the number is odd and more than 10, print d

// We need to solve this using two methods
// method 1: using nested if else
// method 2: using logical operators

/**
 * use the number variable as user input.
 * 
 * change this number yourself to other values and see if
 * you are getting the right answer
 * example: const number = 12
 */ 
//nested:- nesting they can access and modify variable that are define in their parent function.
//logical operators :- The logical or (||) (logical dis junction) operator for a set of a set of operands is 
// is true if and only if one or more of its operands is true.


if (number % 2 === 0) {
    if (number < 15) {
      console.log('a');
    } else {
      console.log('b');
    }
  } else {
    if (number < 10) {
      console.log('c');
    } else {
      console.log('d');
    }
  }

logical operators
  if (number % 2 === 0) {
    console.log(number < 15 ? 'a' : 'b');
  } else {
    console.log(number < 10 ? 'c' : 'd');
  }



// problem 2
//const letters = ["Hi", "my", "name", "is", "Akash"];

/**
 * concat the strings in the aboeve array to get the following result
 * "Hi, my name is Akash."
 * Caution: string has a comma and a full stop
 */

// Hint: solve this using for loop



let result = "";
for (let i = 0; i < letters.length; i++) {
  result += letters[i];
  if (i < letters.length - 1) {
    result += " ";
  } else {
    result += ".";
  }
}
result = result.charAt(0).toUpperCase() + result.slice(1); 
result = result.replace(/ ,/g, ","); 
console.log(result);


// problem 3
// problem 3
/**
 * what will be the result of the consoles and why?
 * 
 */

let age = 20;
age = 100;
const place = "Delhi";
{
    let age = 30;
    age = 40;
    console.log("this is age one ===>", age);
    console.log("this is place ====>", place);
}

age = 60;
console.log("this is age two ===>", age);




// problem 4

// Find sum and multiplication of  all natural numbers from 10 to 20

let sum = 0;
let product = 1;

for (let i = 10; i <= 20; i++) {
  sum += i;
  product *= i;
}

console.log("Sum:", sum); 
console.log("Product:", product); 

// problem 5

// print "yes" if a given year is a leap year else "no"
//solve this using two methods
// method 1: using if else
// method 2: using ternary operator

/**
 *
 * Hint:
 * every year that is exactly divisible by four is a leap year,
 * except for years that are exactly divisible by 100,
 * but these centurial years are leap years if they are exactly divisible by 400
 *
 */

/**
 * use the year variable as user input.
 * 
 * change this number to other values yourself and see if
 * you are getting the right answer
 * example: const year = 1000
 */

if(year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        console.log("yes"); 
      } else {
        console.log("no"); 
      }
    } else {
      console.log("yes"); 
    }
  } else {
    console.log("no"); 
  }
  
  // Using ternary operator
  const isLeapYear =
    year % 4 === 0 ? (year % 100 === 0 ? (year % 400 === 0 ? true : false) : true) : false;
  console.log(isLeapYear ? "yes" : "no");
  In the first method, we use nested if-else statements to check if the year is divisible by 4, 100, and
   400. If it is, we print "yes" to the console, indicating that it is a leap year. Otherwise, we print "no".
  
  In the second method, we use a ternary operator to achieve the same thing in a more concise way. We create
   a variable called isLeapYear that holds a boolean value depending on whether the year is a leap year or not.
    We then print "yes" or "no" to the console depending on the value of isLeapYear.
  
  




// problem 6

// find the area of a triangle.  Lengths of its sides are 5, 6, 7


// 
const a = 5;
const b = 6;
const c = 7;

const s = (a + b + c) / 2;
const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

console.log("The area of the triangle is:", area);


// problem 7
// write program to check whether num variable is between 100 and 200 or 400 and 500
// print true if it is, else print false
// handle edge cases. Hint: what if number is a string or null?


//const num = 20;
/**
 * use the num variable as user input.
 * 
 * change this number to other values yourself and see if
 * you are getting the right answer
 * example: const num = 250
 */



const num = 150;

if (typeof num === "num" && !isNaN(num)) {
  if ((num >= 100 && num <= 200) || (num >= 400 && num <= 500)) {
    console.log(true);
  } else {
    console.log(false);
  }
} else {
  console.log("Invalid input");
}



// problem 8
// you have 3 numbers.
// write a program which can find the largest number
//const numOne= 3;
//const numTwo = 4;
//const numThree = 5;

/**
 * use the numOne, numTwo and numThree variable as user input.
 * 
 * change them to other values yourself and see if
 * you are getting the right answer
 * example: const numOne = 250, numTwo = 4, numThree = 5
 */


// 
const numOne = 3;
const numTwo = 4;
const numThree = 5;

let largestNum = numOne;

if (numTwo > largestNum) {
  largestNum = numTwo;
}

if (numThree > largestNum) {
  largestNum = numThree;
}

console.log("The largest number is:", largestNum);

// problem 9


// write a code which prints true if  one of them is 8 or their sum or difference is 8. 
// Otherwise it should print false


const a = 7;
const b = 9;

if (a === 8 || b === 8 || a + b === 8 || Math.abs(a - b) === 8) {
    console.log("true");
  } else {
    console.log("false");
  }
  
  




 // destructive
 // problem 1
// if the number is even and less than 15, print a
// if the number is even and more than 15, print b
// if the number is odd and less than 10, print c
// if the number is odd and more than 10, print d

// We need to solve this using two methods
// method 1: using nested if else
// method 2: using logical operators

/**
 * use the number variable as user input.
 * 
 * change this number yourself to other values and see if
 * you are getting the right answer
 * example: const number = 12
 */ 
//nested:- nesting they can access and modify variable that are define in their parent function.
//logical operators :- The logical or (||) (logical dis junction) operator for a set of a set of operands is 
// is true if and only if one or more of its operands is true.


if (number % 2 === 0) {
  if (number < 15) {
    console.log('a');
  } else {
    console.log('b');
  }
} else {
  if (number < 10) {
    console.log('c');
  } else {
    console.log('d');
  }
}

logical operators
if (number % 2 === 0) {
  console.log(number < 15 ? 'a' : 'b');
} else {
  console.log(number < 10 ? 'c' : 'd');
}



// problem 2
//const letters = ["Hi", "my", "name", "is", "Akash"];

/**
* concat the strings in the aboeve array to get the following result
* "Hi, my name is Akash."
* Caution: string has a comma and a full stop
*/

// Hint: solve this using for loop



let result = "";
for (let i = 0; i < letters.length; i++) {
result += letters[i];
if (i < letters.length - 1) {
  result += " ";
} else {
  result += ".";
}
}
result = result.charAt(0).toUpperCase() + result.slice(1); 
result = result.replace(/ ,/g, ","); 
console.log(result);


// problem 3
// problem 3
/**
* what will be the result of the consoles and why?
* 
*/

let age = 20;
age = 100;
const place = "Delhi";
{
  let age = 30;
  age = 40;
  console.log("this is age one ===>", age);
  console.log("this is place ====>", place);
}

age = 60;
console.log("this is age two ===>", age);




// problem 4

// Find sum and multiplication of  all natural numbers from 10 to 20

let sum = 0;
let product = 1;

for (let i = 10; i <= 20; i++) {
sum += i;
product *= i;
}

console.log("Sum:", sum); 
console.log("Product:", product); 

// problem 5

// print "yes" if a given year is a leap year else "no"
//solve this using two methods
// method 1: using if else
// method 2: using ternary operator

/**
*
* Hint:
* every year that is exactly divisible by four is a leap year,
* except for years that are exactly divisible by 100,
* but these centurial years are leap years if they are exactly divisible by 400
*
*/

/**
* use the year variable as user input.
* 
* change this number to other values yourself and see if
* you are getting the right answer
* example: const year = 1000
*/

if(year % 4 === 0) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      console.log("yes"); 
    } else {
      console.log("no"); 
    }
  } else {
    console.log("yes"); 
  }
} else {
  console.log("no"); 
}

// Using ternary operator
const isLeapYear =
  year % 4 === 0 ? (year % 100 === 0 ? (year % 400 === 0 ? true : false) : true) : false;
console.log(isLeapYear ? "yes" : "no");
In the first method, we use nested if-else statements to check if the year is divisible by 4, 100, and
 400. If it is, we print "yes" to the console, indicating that it is a leap year. Otherwise, we print "no".

In the second method, we use a ternary operator to achieve the same thing in a more concise way. We create
 a variable called isLeapYear that holds a boolean value depending on whether the year is a leap year or not.
  We then print "yes" or "no" to the console depending on the value of isLeapYear.






// problem 6

// find the area of a triangle.  Lengths of its sides are 5, 6, 7


// 
const a = 5;
const b = 6;
const c = 7;

const s = (a + b + c) / 2;
const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

console.log("The area of the triangle is:", area);


// problem 7
// write program to check whether num variable is between 100 and 200 or 400 and 500
// print true if it is, else print false
// handle edge cases. Hint: what if number is a string or null?


//const num = 20;
/**
* use the num variable as user input.
* 
* change this number to other values yourself and see if
* you are getting the right answer
* example: const num = 250
*/



const num = 150;

if (typeof num === "num" && !isNaN(num)) {
if ((num >= 100 && num <= 200) || (num >= 400 && num <= 500)) {
  console.log(true);
} else {
  console.log(false);
}
} else {
console.log("Invalid input");
}



// problem 8
// you have 3 numbers.
// write a program which can find the largest number
//const numOne= 3;
//const numTwo = 4;
//const numThree = 5;

/**
* use the numOne, numTwo and numThree variable as user input.
* 
* change them to other values yourself and see if
* you are getting the right answer
* example: const numOne = 250, numTwo = 4, numThree = 5
*/


// 
const numOne = 3;
const numTwo = 4;
const numThree = 5;

let largestNum = numOne;

if (numTwo > largestNum) {
largestNum = numTwo;
}

if (numThree > largestNum) {
largestNum = numThree;
}

console.log("The largest number is:", largestNum);

// problem 9


// write a code which prints true if  one of them is 8 or their sum or difference is 8. 
// Otherwise it should print false


const a = 7;
const b = 9;

if (a === 8 || b === 8 || a + b === 8 || Math.abs(a - b) === 8) {
  console.log("true");
} else {
  console.log("false");
}






