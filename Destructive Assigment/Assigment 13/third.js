       Method-chain-Problem
  
  //Problem 1.  push() method returns the new length of the array after adding the new element, 
not the modified array itself. So, the filter() method will be called on the number 6, 
which is not an array and does not have a filter() method.

// Problem 2. After running the code, we should see a runtime error saying
 TypeError: [1,2,3,4,5,6].filter is not a function, which confirms that the code is not running as expected.

// PROBlem 3. To correct the code, we can split the push() and filter() methods into separate statements, like this:


function filterOddNumbers(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

const numbers = [1, 2, 3, 4, 5];
numbers.push(6);
const evenNumbers = numbers.filter(filterOddNumbers);
console.log(evenNumbers);
In this corrected code, we first declare an array of numbers and use push() to add the number 6 to the array. Then, we apply the filter() method to the modified array to get an array of even numbers. Finally, we log the resulting array to the console.


