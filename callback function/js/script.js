// function declaration , function expression, function arrow

// function declation
// function max(num1, num2) {
//   if (num1 > num2) {
//     return num1;
//   } else if (num2 > num1) {
//     return num2;
//   } else {
//     return "both are equal";
//   }
// }
// console.log(max(17, 15));

// function expression
// const max = function (num1, num2) {
//   if (num1 > num2) {
//     return num1;
//   } else if (num2 > num1) {
//     return num2;
//   } else {
//     return "both are equal";
//   }
// };
// console.log(max(14, 14));

//function arrow
// const max = (num1, num2) => {
//   if (num1 > num2) {
//     return num1;
//   } else if (num2 > num1) {
//     return num2;
//   } else {
//     return "both are equal";
//   }
// };
// console.log(max(12, 14));

//callback function
// Example 1.
// function calculate(num1, num2, fn) {
//   console.log(num1, num2);
//   fn(num1, num2);
// }
// console.log(100, 200, sum);
// console.log(100, 200, sub);
// console.log(100, 200, mul);
// console.log(100, 200, div);

// function sum(num1, num2) {
//   console.log(num1 + num2);
// }

// function sub(num1, num2) {
//   console.log(num1 - num2);
// }

// function mul(num1, num2) {
//   console.log(num1 * num2);
// }

// function div(num1, num2) {
//   console.log(num1 / num2);
// }

//Example 2.
// function test(fn) {
//   fn();
// }
// test(function () {
//   console.log("hello");
// });
// test(function () {
//   console.log("hello world");
// });
//Ek function bnana hai jise aap date of birth year pass kroge to vo apko age return krega

// function calculateAge(dateOfBirth) {
//   let currentYear = 2023;
//   let age = currentYear - dateOfBirth;
//   return age;
// }
// let dateOfBirth = 2009;
// let age = calculateAge(dateOfBirth);
// console.log(age);

// function printFibonacciSeries(n) {
//   var fibSeries = [];

//   // First two numbers of the series
//   fibSeries[0] = 1;
//   fibSeries[1] = 1;

//   // Generate Fibonacci series
//   for (var i = 2; i < n; i++) {
//     fibSeries[i] = fibSeries[i - 1] + fibSeries[i - 2];
//   }

//   // Print the series
//   for (var i = 0; i < n; i++) {
//     console.log(fibSeries[i]);
//   }
// }

// // Example usage
// var seriesLength = 10; // Print Fibonacci series up to the 10th number
// printFibonacciSeries(seriesLength);

// Fibonacci numbers print krne ke liye function bnao like
// 1 1 2 3 5 8 13.. tb tak jab tk series pass number tk ni pahuch jaye.

//Fibonacci numbers apne se pahle vale two numbers ka sum hote hain.
// eg. fibnum[0] = [1];
//    fibonaccinum[1] = [1];
//    fibonaccinum[2] = [2];
//    fibonaccinum[3] = [3];
//    fibonaccinum[4] = [5];
//    fibonaccinum[5] = [8];
//    fibonaccinum[6] = [13];
//    fibonaccinum[0] = [21];
//    fibonaccinum[0] = [34];

// function fibonacciNumbers(n) {
//   var fibonacciSeries = [];

//   // first two numbers ki fibonacci series.
//   fibonacciSeries[0] = 1;
//   fibonacciSeries[1] = 1;

//   for (let i = 2; i < n; i++) {
//     fibonacciSeries[i] = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
//   }

//   /// Print fibonacciseries
//   for (let i = 0; i < n; i++) {
//     console.log(fibonacciSeries[i]);
//   }
// }
// let n = 10;
// fibonacciNumbers(n);
