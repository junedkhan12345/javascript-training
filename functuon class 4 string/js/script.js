// console.log("b".split("b"));
// console.log("Weocde".startsWith(""));
// console.log("Wecode".endsWith(""));
// console.log("");
// let str = "Sjhijvjrajaaj";
// let arr = str.split("");
// console.log(arr);
// let count = 0;
// for (let value of arr) {
//   if (value === "j") {
//     count++;
//   }
// }



// let str = "WECODE Academy";
// let leftpart = str.substring(0, 1);
// let rightpart = str.substring(1);


// let str = "1";
// value = "";
// for(let i = 1; i <= 5; i++){
//     value = value + str;
//     console.log(value.repeat(1)); 
// }




// *****
// ****
// ***
// **
// *

// for(let i = 5; i >= 1; i--){
//     str = "";
//     for(let j = 1; j <= i; j++){
//         str = str + "*";
        
//     }
//     console.log(str);
// }



// $##$##$
// $##$##
// $##$
// $##
// $


// for(let i = 5; i >= 1; i--){
//     str = "";
//     for(let j = 1; j <= i; j++){
//         if(j % 2 === 1){
//             str = str + "$";
//         }else{
//             str = str + "##";
//         }
//     }
//     console.log(str);
// }


// #
// ##
// ###
// ####
// #####
// for(let i = 1; i <= 5; i++){
//     str = "";
//     for(let j = 1; j <= i; j++){
//         str = str + "#";
        
//     }
//     console.log(str);
// }


//Create Bill Calculator

// let ans1 = Number(prompt("How many frech fries do want to order"));

// console.log("frech fries = ", ans1 +"</br>");
// ans1 = 60 * ans1;
// console.log("total of frech fries =", ans1 +"</br>");

// let ans2 = Number(prompt("How many burgers (50rs per piece) do you want to order ?"));

// console.log("burgers = ", ans2 +"</br>");
// ans2 = 50 * ans2;
// console.log(ans2 +"</br>");

// let ans3 = Number(prompt("How many plates of chowmin (100rs per plate) do you want to order?"));

// console.log("chowmin = ", ans3 +"</br>");
// ans3 = 100 * ans3;
// console.log(ans3 +"</br>");

// let ans4 = Number(prompt("How many plates of Manchurian (80rs per plate) do you want to order?"));

// console.log("Manchurian = ", ans4);
// ans4 = 80 * ans4;
// console.log(ans4 +"</br>");

// let ans5 = Number(prompt("How many Cokes (50 per piece) do you want to order ?"));

// console.log("Cokes = ", ans5);
// ans5 = 50 * ans5;
// console.log(ans5 +"</br>" +"</br>");

// let total = ans1 + ans2 + ans3 + ans4 + ans5;
// console.log("total = ", total);





// Function to calculate the total bill
function calculateBill(quantity, price) {
    return quantity * price;
  }
  
  // Get user input
  var itemQuantity = parseInt(prompt("Enter the quantity:"));
  var itemPrice = parseFloat(prompt("Enter the price per item:"));
  
  // Calculate the bill
  var totalBill = calculateBill(itemQuantity, itemPrice);

  
  // Display the total bill
  console.log("Total Bill: $" + totalBill.toFixed(2));
  