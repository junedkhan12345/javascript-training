// //Question 1. Create an array with three elements and print out the second element.
// // let arr = [3, 15, 20];
// // console.log(arr[1]);

// // Question 2. Create an array with five elements and print out the length of the array.
// let arr = [1, 2, 3, 6, 8, 4, 5];
// console.log(arr.length);

// // Question 3. Create an array with four elements and print out each element using a for loop.
// arr = [1, 2, 3, 4];
// for (let i = arr[0]; i <= arr.length; i++) {
//   console.log(i);
// }

// // Question 4. Create an array with six elements and print out each element using a forEach loop.

// arr = [2, 4, 3, 5, 7, 8];
// let ans = arr.forEach((value) => {
//   console.log(value);
// });

// // Question 5. Create an array with three elements and add a fourth element to the end of the array.
// arr = [5, 10, 15];
// arr.push(20);
// console.log(arr);

// // Question 6. Create an array with four elements and remove the second element.
// arr = [3, 6, 9, 12];
// arr.splice(1, 1);
// console.log(arr);

// // Question 7. Create an array with five elements and remove the last element.

// arr = [3, 6, 9, 12, 15];
// arr.pop();
// console.log(arr);

// // Question 8. Create an array with three elements and check if the array includes a specific value.

// arr = [5, 15, 25];
// let specificValue = 15;
// if (arr.includes(specificValue)) {
//   console.log(`yes includes a specific value:${specificValue}`);
// } else {
//   console.log("no");
// }

// // Question 9. Create an array with five elements and sort the array in ascending order.
// arr = [6, 3, 5, 8, 2];
// arr.sort((a, b) => {
//   return a - b;
// });
// console.log(arr);

// // Question 10. Create an array with five elements and sort the array in descending order.
// arr = [6, 3, 5, 8, 2];
// arr.sort((a, b) => {
//   return b - a;
// });
// console.log(arr);

// // Question 11. Create two arrays, concatenate them and print out the resulting array.
// let arr1 = [1, 2, 3, 4, 5, 6];
// let arr2 = [7, 8, 9, 10];
// let arr3 = arr1.concat(arr2);
// console.log(arr3);

// // Question 12. Create an array with three elements and convert it to a string.

// arr = [2, 4, 6];
// ans = arr.toString();
// console.log(ans);

// // Question 13. Create an array with four elements and reverse the order of the elements
// arr = [2, 4, 6, 8];
// arr.reverse();
// console.log(arr);

// // Question 14. Create an array with five elements and find the index of a specific value.

// arr = [2, 3, 4, 5];
// ans = arr.indexOf(2);
// console.log(ans);

// // Question 15. Create an array with six elements and slice the array to create a new array with the first three elements.
// arr = [1, 3, 5, 7, 9, 11];
// ans = arr.slice(0, 3);
// console.log(ans);

// // Question 16. Create an array with six elements and use the map method to double each element.

// arr = [1, 3, 4, 5, 6, 8];
// ans = arr.map((value) => {
//   return value * 2;
// });
// console.log(ans);

// // Question 17. Create an array with four elements and use the while loop to calculate the sum of all elements.
// arr = [1, 5, 9, 4];
// let sum = 0;
// let i = 0;
// while (i < arr.length) {
//   sum = sum + arr[i];
//   i++;
// }
// console.log(sum);

// // Question 18. Create an array with five elements and use the filter method to return only the even numbers.
// arr = [1, 2, 3, 4, 5];
// ans = arr.filter((value) => {
//   if (value % 2 === 1) {
//     return value;
//   }
// });
// console.log(ans);

// // Question 19. Create an array with three elements and use the join method to concatenate the elements with a dash (-) separator.

// arr = [3, 5, 7];
// ans = arr.join("_");
// console.log(ans);

// // Question 20. Create two arrays with three elements each and use the concat method to combine them into a new array.

// arr1 = [2, 4, 6];
// arr2 = [3, 5, 7];

// arr3 = arr1.concat(arr2);
// console.log(arr3);

// // Question 1. Create an array called fruits that contains the following elements: "apple", "banana", "orange". Now check if "orange" is in the fruits array.

// let fruits = ["apple", "banana", "orange"];
// if (fruits.includes("orange")) {
//   console.log("yes");
// } else {
//   console.log("no");
// }

// // Question 2. Given an array of numbers, write a function that returns the sum of all the even numbers in the array.
// arr = [2, 4, 6, 8, 10];
// function sumOfArr(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       sum = sum + arr[i];
//     }
//   }
//   return sum;
// }
// console.log(sumOfArr(arr));

// // Question 4. Given an array of strings, write a function that returns the longest string in the array.

// arr = ["hello", "world", "wecode", "academy"];
// let longestString = function (arr) {
//   let string = "";
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i].length > string.length) {
//       string = arr[i];
//     }
//   }
//   return string;
// };
// console.log(longestString(arr));

// // Question 5. Write a function that takes an array of numbers and returns the largest number in the array.

// arr = [3, 6, 4, 13, 9, 7];
// let largestNumber = function (arr) {
//   let maxNumber = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > maxNumber) {
//       maxNumber = arr[i];
//     }
//   }
//   return maxNumber;
// };
// console.log(largestNumber(arr));

// // Question 6. Write a function that takes an array of numbers and returns a new array that only contains the even numbers from the original array.

// arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function arrEvenNumber(arr) {
//   let evenArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     let even = arr[i];
//     if (arr[i] % 2 === 0) {
//       evenArr.push(even);
//     }
//   }
//   return evenArr;
// }
// console.log(arrEvenNumber(arr));

// // Question 7. Write a function that takes an array of strings and returns a new array that only contains strings with more than 5 characters.

// arr = ["banana", "apple", "mango", "orange", "hello", "wecode"];
// function arrStrings(arr) {
//   let stringArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     let string = arr[i];
//     if (string.length > 5) {
//       stringArr.push(string);
//     }
//   }
//   return stringArr;
// }
// console.log(arrStrings(arr));

// // Question 8. Write a function that takes two arrays of numbers and returns a new array that contains the intersection of the two arrays (i.e. only the numbers that appear in both arrays).
// arr1 = [2, 4, 6, 3, 7, 5];
// arr2 = [1, 9, 3, 7, 10, 4];
// function intersectionTwoArrays(arr1, arr2) {
//   let intersection = [];
//   for (let i = 0; i < arr1.length; i++) {
//     let number = arr1[i];
//     if (arr2.includes(number)) {
//       intersection.push(number);
//     }
//   }
//   return intersection;
// }
// console.log(intersectionTwoArrays(arr1, arr2));

// // Question 9. Write a function that takes an array of numbers and returns a new array where each element is the square of the original element

// arr = [1, 2, 3, 4];
// function squareOfArray(arr) {
//   let squareArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     squareArr.push(arr[i] * arr[i]);
//   }
//   return squareArr;
// }
// console.log(squareOfArray(arr));

// // Question 10. Write a function that takes an array of numbers and returns the average of all the numbers in the array.

// arr = [1, 2, 3, 4, 5];
// function averageOfNumbers(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   return sum / arr.length; //Averege
// }
// console.log(averageOfNumbers(arr));

// // Question 11. Write a function that takes an array of numbers and returns a new array that only contains numbers that are greater than 5. Use filter function
// arr = [2, 7, 0.4, 9, 1, 10, 8];
// function numbersGreaterThan(arr) {
//   let filterNum = arr.filter((arr) => arr > 5);
//   return filterNum;
// }
// console.log(numbersGreaterThan(arr));

// // Questuion 12. Write a function that takes an array of numbers and returns a new array where each element is the original element plus 1. use map function

// arr = [1, 2, 3, 4, 5];

// function EachNumberPlus1(arr) {
//   let mapNumber = arr.map((arr) => arr + 1);
//   return mapNumber;
// }
// console.log(EachNumberPlus1(arr));

// // Question 15. Write a function that takes an array of strings and sorts them by their length in ascending order.

// let strings = ["apple", "banana", "cherry", "date"];
// strings.sort((a, b) => {
//   return a.length - b.length;
// });
// console.log(strings);

// // Question 18. Write a function that takes an array of strings and returns a new array with only the strings that contain the letter "a".

// strings = ["aple", "banana", "orange", "kiwi", "lychee"];

// let stringArr = strings.filter((value) => {
//   for (let i = 0; i < value.length; i++) {
//     if (value[i].includes("a")) {
//       return value[i];
//     }
//   }
// });
// console.log(stringArr);

// // Question 19. Write a function that takes an array of numbers and returns a new array with the numbers sorted in ascending order.

// arr = [5, 12, 6, 2, 3, 9, 4, 8, 1, 7];
// function ascendingOrder(arr) {
//   arr.sort((a, b) => {
//     return a - b;
//   });
//   return arr;
// }
// console.log(ascendingOrder(arr));

// // Question 20. Write a function that takes an array of strings and flattens each string into an array of characters, then flattens the result into a single array.

// arr = ["hello", "world"];
// function flattenArr(arr) {
//   const newFlattArr = arr.flatMap((arr) => arr.split(""));
//   return newFlattArr;
// }
// console.log(flattenArr(arr));
