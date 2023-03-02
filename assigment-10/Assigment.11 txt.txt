// 1. Problem
////nested if else
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

////logical operators
  if (number % 2 === 0) {
    console.log(number < 15 ? 'a' : 'b');
  } else {
    console.log(number < 10 ? 'c' : 'd');
  }

// 2. Problem
const letter = ["Hi "," My","name","is"," lankesh"]
let str ='';
for (let i=0; i< x.length; i++){
if (i <1) {
str = str + x[0] +','
} else {
   str += ' ' +x[i]
}
} 

str =str +'.';

console,log(str);

// 3. Problem
//Global scope and local scope

           Global variable
              /
       var Global = 10;
function fun() {
       var local = 5;
          \
       Local variable
       

// 5. Problem
let sum = 0;
let product = 1;

for (let i = 10; i <= 20; i++) {
  sum += i;
  product *= i;
}

console.log("Sum:", sum); // Output: Sum: 165
console.log("Product:", product); // Output: Product: 6704425728000
 
// 6. problem 
what is leap year?
 The year (every four years) with 366 days instead of 365 days is known as a 
leap year.

if (year % 4 === 0) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      console.log("yes"); // Leap year
    } else {
      console.log("no"); // Not a leap year
    }
  } else {
    console.log("yes"); // Leap year
  }
} else {
  console.log("no"); // Not a leap year
}

//7. Problem

// Area of triangle = 1/2* base*height

const a = 5;
const b = 6;
const c = 7;

const s = (a + b + c) / 2;
const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

console.log("The area of the triangle is:", area);


// 8. Problem

// 9. Problem

if (typeof num === "number" && !isNaN(num)) {
  if ((num >= 100 && num <= 200) || (num >= 400 && num <= 500)) {
    console.log;
  } else {
    console.log;
  }
} else {
  console.log("Invalid input");
}

//10. Problem
// Program to find the largest among three number
if(num1>= num2 && num1 >= num3){
largest = num1;
}
else if ( num2 >= num1 && num2 >=num3){
largest = num2;
}
else {
largest = num3;
}
console.log(" The largest number is" + largest);

//11.problem

function check 8(x,y){
if (x==8 || y==8) {
   return true;
}
if (x+y==8 || math.abs(x -y) ==8)
{
return true;
}
return false;
} 
console.log (check8(7,8));
console.log (check8(16,8));
console.log (check8(24,32));
console.log (check8(17,18));







































