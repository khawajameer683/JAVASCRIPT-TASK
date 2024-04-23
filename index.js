
// JAVA TASK 01
// // Function to check if a given string is a palindrome
// function isPalindrome(str) {
//     // Initialize pointers at the beginning and end of the string
//     let left = 0;
//     let right = str.length - 1;

//     // Loop until the pointers meet in the middle
//     while (left < right) {
//         // Compare characters at the left and right pointers
//         if (str[left] !== str[right]) {
//             // If characters don't match, return false
//             return false;
//         }
//         // Move the pointers towards the center
//         left++;
//         right--;
//     }
//     // If the loop completes without finding a mismatch, return true
//     return true;
// }

// // Test cases to validate the function's correctness
// function testIsPalindrome() {
//     // Test case 1: A palindrome word
//     console.assert(isPalindrome("racecar") === true, 'Test case 1 failed');
    
//     // Test case 2: A non-palindrome word
//     console.assert(isPalindrome("hello") === false, 'Test case 2 failed');
    
//     // Test case 3: A single-character string (always a palindrome)
//     console.assert(isPalindrome("a") === true, 'Test case 3 failed');
    
//     // Test case 4: An empty string (always a palindrome)
//     console.assert(isPalindrome("") === true, 'Test case 4 failed');
    
//     // Test case 5: A palindrome phrase with spaces (ignoring spaces)
//     console.assert(isPalindrome("a man a plan a canal panama".replace(/\s/g, "")) === true, 'Test case 5 failed');
    
//     // Test case 6: A non-palindrome phrase
//     console.assert(isPalindrome("not a palindrome") === false, 'Test case 6 failed');

//     console.log("All test cases passed!");
// }

// // Run the test cases
// testIsPalindrome();
     

// JAVASCRIPT TASK 2
// // Function to find the minimum and maximum numbers from an array
// function findMinMax(arr) {
//     // Initialize minimum and maximum with the first element of the array
//     let min = arr[0];
//     let max = arr[0];

//     // Iterate through the array
//     for (let i = 1; i < arr.length; i++) {
//         // Update the minimum value if the current element is smaller
//         if (arr[i] < min) {
//             min = arr[i];
//         }

//         // Update the maximum value if the current element is larger
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }

//     // Return an object containing the minimum and maximum values
//     return { min, max };
// }

// // Test cases to validate the function's correctness
// function testFindMinMax() {
//     // Test case 1: A series of positive numbers
//     const arr1 = [5, 12, 7, 3, 15];
//     const result1 = findMinMax(arr1);
//     console.assert(result1.min === 3 && result1.max === 15, 'Test case 1 failed');

//     // Test case 2: A series of negative and positive numbers
//     const arr2 = [-5, -3, 0, 4, 9];
//     const result2 = findMinMax(arr2);
//     console.assert(result2.min === -5 && result2.max === 9, 'Test case 2 failed');

//     // Test case 3: An array with all equal elements
//     const arr3 = [7, 7, 7, 7, 7];
//     const result3 = findMinMax(arr3);
//     console.assert(result3.min === 7 && result3.max === 7, 'Test case 3 failed');

//     // Test case 4: A single-element array
//     const arr4 = [10];
//     const result4 = findMinMax(arr4);
//     console.assert(result4.min === 10 && result4.max === 10, 'Test case 4 failed');

//     // Test case 5: An array with zero as the minimum
//     const arr5 = [0, 15, 9, -2, 3];
//     const result5 = findMinMax(arr5);
//     console.assert(result5.min === -2 && result5.max === 15, 'Test case 5 failed');

//     console.log("All test cases passed!");
// }

// // Run the test cases
// testFindMinMax();
                  
              JAVASCRIPT TASK 3
              // Function to find the missing number from a series of numbers
function findMissingNumber(series) {
    // Calculate the length of the series
    const length = series.length;

    // Calculate the first and last numbers in the series
    const start = series[0];
    const end = series[length - 1];

    // Calculate the expected sum of numbers from start to end
    const expectedSum = ((end + start) * (end - start + 1)) / 2;

    // Calculate the actual sum of the series
    let actualSum = 0;
    for (let i = 0; i < length; i++) {
        actualSum += series[i];
    }

    // Calculate the missing number
    const missingNumber = expectedSum - actualSum;

    return missingNumber;
}

// Test cases to validate the function's correctness
function testFindMissingNumber() {
    // Test case 1: The given series with missing number
    const series1 = [11, 12, 14, 15, 16, 18, 19, 20];
    const result1 = findMissingNumber(series1);
    console.assert(result1 === 13, `Test case 1 failed: expected 13 but got ${result1}`);
    
    console.log("All test cases passed!");
}

// Run the test cases
testFindMissingNumber();
