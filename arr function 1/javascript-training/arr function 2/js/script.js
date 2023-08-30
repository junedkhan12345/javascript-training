// let arr = [1, 2, 3, 4, 5];
// // forEach function of the array
// // arr.forEach((value) => {
// //   //   if (value > 3) {
// //   //     console.log(value);
// //   //   }
// //   if (value % 2 === 0) {
// //     console.log(value);
// //   }
// // });

// let ans = arr.find((value) => {
//   return value > 3;
// });
// console.log(ans);

// ans = arr.some((value) => {
//   return value > 3;
// });
// console.log(ans);

// ans = arr.every((value) => {
//   return value > 3;
// });
// console.log(ans);

// ans = arr.findIndex((value) => {
//   return value > 2;
// });
// console.log(ans);

// ans = arr.map((value) => {
//   return value * 5;
// });
// console.log(ans);

// ans = arr.filter((value) => {
//   if (value > 2 && value % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// });
// console.log(ans);

// ans = arr.reduce((pre, curr) => {
//   //   console.log(pre, curr);
//   return pre + curr;
// });

// ans = arr.reduce((pre, curr) => {
//   //   console.log(pre, curr);
//   return pre + curr;
// }, 100);

// let names = ["Aadil", "Arun", "Aadi", "Sara", "Ruhi", "Wecode"];
// let lenght = names.reduce((pre, curr) => {
//   console.log(pre, curr);
//   return pre + curr.length;
// }, 0);
// console.log(lenght);

//questions
//1. find value greater than 20 using find function
// let arr = [1, 2, 5, 10, 20, 30, 45, 60];
// let ans = arr.find((value) => {
//   return value > 20;
// });
// console.log(ans);

//2. find sting length using find function

//3. filter all number less than 100
// let arr = [1, 2, 5, 10, 20, 30, 45, 60, 80, 100, 120, 150];
// let ans = arr.filter((value) => {
//   return value < 100;
// });
// console.log(ans);

//4. filter all number greater than 50 and multiple of 5
// let arr = [1, 2, 5, 10, 20, 30, 45, 60, 80, 100, 120, 150];
// let ans = arr.filter((value) => {
//   return value > 50 && value % 5 === 0;
// });
// console.log(ans);

//6. calculate sum of all the numbers of arrray using reduce funtion
// let arr = [1, 2, 5, 10, 20];
// let ans = arr.reduce((pre, curr) => {
//   console.log(pre, curr);
//   return pre + curr;
// });
// console.log(ans);

//8.
// let arr = [1, 2, 3, 4, 5];
// let ans = arr.map((value) => {
//   if (value % 2 === 1) {
//     return value + 1;
//   } else {
//     return value;
//   }
// });
// console.log(ans);

//9.
// let arr = [1, 2, 3, 4, 5];
// let ans = arr.map((value) => {
//   if (value % 2 === 0) {
//     return value + 1;
//   } else {
//     return value;
//   }
// });
// console.log(ans);

//10.
// let arr = [1, 2, 5, 10, 20, 30, 45, 60, 80, 100, 120, 150];
// let ans = arr.every((value) => {
//   if (value % 5 === 0) {
//     console.log(value);
//   } else {
//     console.log(value);
//   }
// });
// console.log(ans);

//11.
// let arr = [1, 2, 5, 10, 20, 30, 45, 60, 80, 100, 120, 150];
// let ans = arr.some((value) => {
//   return value % 2 === 0 && value < 10;
// });
// console.log(ans);

// function array
//sort function
// let arr = ["Shoaib", "Anis", "Aamir", "Shad", "Ali Sher", "Anis", "Aarif"];
// arr.sort(); //natural sorting
// console.log(arr);

// let arr = [1, 3, 5, 2, 7, 6, 9, 8];
// arr.sort(); //natural sorting
// console.log(arr);

// let arr = [1, 34, 45, 15, 23, 2, 28, 24, 3, 54, 56, 4, 78];
// arr.sort();//natural sorting
// console.log(arr);

// let arr = [1, 34, 45, 15, 23, 2, 28, 24, 3, 54, 56, 4, 78];
// arr.sort((a, b) => {
//   console.log("a", a, "b", b);
//   return a - b;
// });
// console.log(arr);

// let arr = [1, 34, 45, 15, 23, 2, 28, 24, 3, 54, 56, 4, 78];
// arr.sort((a, b) => {
//   console.log("a", a, "b", b);
//   return b - a;
// });
// console.log(arr);

let arr = [1, 34, 45, 15, 23, 2, 28, 24, 3, 54, 56, 4, 78];
arr.sort((a, b) => {
  console.log("a", a, "b", b);
  return 0;
});
console.log(arr);
