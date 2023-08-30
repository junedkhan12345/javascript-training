// setTimeout(function(){
//     console.log("hello");
// }, 5000);

// setInterval(function(){
//     console.log("hello");
// }, 1000);

// let id = setInterval(function(){
//     console.log("hello");
// }, 1000);

// setTimeout(function(){
//     let a = 10;
//     let b = 20;
//     console.log(a + b)
// }, 1000);

// function test(){
//     console.log("hello from function declaration");
// }
// test();

// let i = 1;
// setInterval(function(){
//     console.log(i);
//     ++i;
// }, 1000);

// let hours = 0;
// let minutes = 0;
// let seconds = 0;

// setInterval(function(){

//     ++seconds;

//     if(seconds === 59){
//         ++minutes;
//         seconds = 0;
//     }
//     if(minutes === 59){
//         ++hours;
//         minutes = 0;
//     }

// console.log(`${hours}:${minutes}:${seconds}`);}, 1000);

// let id = setInterval(function(){
//     console.log("hello world");
// }, 1000);

// setTimeout(function(){
//     clearInterval(id);
// }, 10000);

// function test(num, cb1, cb2){
//    if(num % 2 === 1){
//     cb1(num);
//    } else{

//     cb2(num);
//   }
// }
// test(19, function isOdd(){
//     console.log("Odd");
//    }, function isEven(){
//     console.log("Even");
// });

// function test(num, cb1, cb2){
//     if(num % 2 === 1){
//      cb1(num);
//     } else{

//      cb2(num);
//    }
//  }

//  test(14, isOdd, isEven);
//  function isOdd(){
//     console.log("Odd");
//    }

//    function isEven(){
//     console.log("Even");
// }

// function test(num1, num2, num3){
//     console.log(num1, num2, num3);

//     if(num1, num2, num3 !== undefined){
//         return function hello(num1, num2, num3){
//             if(num1 > (num2 & num3)){
//                 return num1;
//             }else if(num2 > (num1 & num3)){
//                 return num2;
//             }else if(num3 > (num1 & num2)){
//                 return num3;
//             }else{
//                 return "these are equal";
//             }
//         }
//     }else{
//         return function(){
//             console.log("hello world");
//         }
//     }
// }
// console.log(test(1, 2, 3));

// let num = 1;
// let id1 = setInterval(function () {
//   console.log(num);
//   console.log("==");
//   num = num + 2;

//   if (num > 10) {
//     clearInterval(id1);
//   }
// }, 1000);

// let id2 = setInterval(function () {
//   console.log(num);
//   console.log("====");
//   num = num + 2;

//   if (num > 10) {
//     clearInterval(id2);
//   }
// }, 1000);

// let counter = 1;

// let intervalId1 = setInterval(() => {
//   console.log(counter);
//   counter++;
//   if (counter === 3) {
//     console.log("==");
//   } else if (counter === 5) {
//     console.log("====");
//   } else if (counter === 7) {
//     console.log("======");
//   } else if (counter === 9) {
//     console.log("========");
//   } else if (counter === 11) {
//     console.log("==========");
//     clearInterval(intervalId1);
//     clearInterval(intervalId2);
//   }
// }, 1000);

// let intervalId2 = setInterval(() => {
//   console.log(counter);
//   counter++;
//   if (counter === 3) {
//     console.log("==");
//   } else if (counter === 5) {
//     console.log("====");
//   } else if (counter === 7) {
//     console.log("======");
//   } else if (counter === 9) {
//     console.log("========");
//   } else if (counter === 11) {
//     console.log("==========");
//     clearInterval(intervalId1);
//     clearInterval(intervalId2);
//   }
// }, 1000);

// let num = 1;

// let intervalId1 = setInterval(function () {
//   console.log(num);
//   num++;

//   if (num === 3) {
//     console.log("==");
//   } else if (num === 5) {
//     console.log("====");
//   } else if (num === 7) {
//     console.log("======");
//   } else if (num === 9) {
//     console.log("========");
//   } else if (num === 11) {
//     console.log("==========");
//     clearInterval(intervalId1);
//     clearInterval(intervalId2);
//   }
// }, 1000);

// let intervalId2 = setInterval(function () {
//   console.log(num);
//   num++;

//   if (num === 3) {
//     console.log("==");
//   } else if (num === 5) {
//     console.log("====");
//   } else if (num === 7) {
//     console.log("======");
//   } else if (num === 9) {
//     console.log("========");
//   } else if (num === 11) {
//     console.log("==========");
//     clearInterval(intervalId1);
//     clearInterval(intervalId2);
//   }
// }, 1000);

// let num = 1;

// let id1 = setInterval(function () {
//   console.log(num);
//   num++;

//   if (num === 3) {
//     console.log("==");
//   } else if (num === 5) {
//     console.log("====");
//   } else if (num === 7) {
//     console.log("======");
//   } else if (num === 9) {
//     console.log("========");
//   } else if (num === 11) {
//     console.log("==========");
//     setTimeout(function () {
//       clearInterval(id1);
//       clearInterval(id2);
//     });
//   }
// }, 1000);

// let id2 = setInterval(function () {
//   console.log(num);
//   num++;

//   if (num === 3) {
//     console.log("==");
//   } else if (num === 5) {
//     console.log("====");
//   } else if (num === 7) {
//     console.log("======");
//   } else if (num === 9) {
//     console.log("========");
//   } else if (num === 11) {
//     console.log("==========");
//     setTimeout(function () {
//       clearInterval(id1);
//       clearInterval(id2);
//     });
//   }
// }, 1000);
