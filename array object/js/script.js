let obj = {
  name: "juned",
  age: 17,
  fname: "sarfuddin",
  mobileNumber: 8890367642,
  instituteName: "University Commerce College",
  address: {
    pincode: 322234,
    vill: "kutapur",
    tehsil: "hindaun city",
  },
  accountDetails: {
    accountHolderName: "mohammad juned",
    bankName: "PNB",
    accountsNumber: 783784385945,
  },
};

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

for (let value of Object.keys(obj)) {
  console.log(value);
}
for (let value of Object.values(obj)) {
  console.log(value);
}
for (let value of Object.entries(obj)) {
  console.log(value);
}
for (let value of Object.entries(obj)) {
  console.log(value[0], value[1]);
}

// let obj = {
//   name: "Wecode",
//   age: 18,
//   sum: function (a, b) {
//     console.log(a + b);
//   },
// };
// console.log(obj);
// console.log(obj.age);
// console.log(obj.name);
// obj.sum(10, 20);
// console.log(obj.sum);

// let obj = {
//   name: "Wecode",
//   age: 18,
//   sum: function (a, b) {
//     console.log(a + b);
//   },
//   12: 2000,
//   numbers: [1, 2, 3, 4, 5],
//   age2: 100,
// };
// console.log(obj.numbers[3]);
// console.log(obj["age"]);
// console.log(obj["name"]);
// console.log(obj["sum"]);
// console.log(obj["numbers"]);//
// console.log(obj["numbers"][3]);//4
// console.log(obj["12"]);//200
// console.log(obj.age + 2);//20
// console.log(obj["age" + 2]);//100

// let obj = {
//   name: "wecode",
//   age: 18,
//   address: {
//     pincode: 302012,
//     city: "jaipur",

//     address: {
//       pincode: 302012,
//       city: "jaipur",

//       address: {
//         pincode: 302012,
//         city: "jaipur",
//       },
//     },
//   },
//   numbers: [1, 2, 3, 4, 5],
// };
// console.log(obj.address);
// console.log(obj.address.address.address);
// console.log(obj.address.address.address.pincode);

// console.log(obj["address"]);
// console.log(obj["address"]["address"]["address"]);
// console.log(obj["address"]["address"]["address"]["pincode"]);
// console.log(obj["address"]["address"]["address"]["city"]);

// let age = +prompt("Enter your age");
// let obj = {
//   ["age" + age]: 5000,
// };
// console.log(obj);
// console.log(obj["age" + age]);
