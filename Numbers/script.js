// console.log(0.3 + 0.2);
// console.log(0.1 + 0.2);

// console.log(0.3 + 0.4);

// if (0.1 + 0.2 === 0.3) {
//   console.log("yes");
// } else {
//   console.log("no");
// }

// console.log("juned" - 22);
// console.log(10_000_00); //"," comma nahi lagega

// console.log(Math.floor(10.96)); // always original number ko lega point(.) wali number ko remove dega

// console.log(Math.ceil(10.34)); //always one add karke lega (10.23 -> 11, 34.3536 -> 35)

// console.log(Math.PI); //PI ki value

// console.log(Math.max(3, 6, 4, 89, 56, 76, 45, 34));

// console.log(Math.min(6, 34, 7, 8, 23, 1, 89));

// console.log(Math.max(...[23, 34, 76, 56, 78, 21]));

// console.log(Math.min(...[43, 54, 12, 65, 23]));

// console.log(Math.trunc(10.56)); // yeh original number ko lega (10.56 -> 10)

// console.log(Math.round(10.38)); //point wala number 50 se kam he to 10 print karega
// console.log(Math.round(10.76)); //point wala number 50 se bada he to 11 print karega

// console.log(Math.random());

// console.log(Math.trunc(Math.random() * 100 + 1));

// console.log(100 / 0); //infinity
// console.log(100 / 0 === Infinity); //true

// Number BIGINT

// let a = 10;
// console.log(typeof a);

// a = 10n;
// console.log(typeof a);

// let b = BigInt(10);
// console.log(b);
// console.log(typeof b);

// console.log(Number.MAX_SAFE_INTEGER); //9007199254740991

// console.log(10 / 2); //5
// console.log(10n / 2); //error

// console.log(10n / 2n);
// console.log(10n + 2n);
// console.log(10n * 2n);

// console.log(Number(3543666536987445547653557n));

// let num = 23354754334345568676356675n;
// if (Number.MAX_SAFE_INTEGER >= num) {
//   console.log("yes");
// } else {
//   console.log("no");
// }

//////convert number to string
// let a = 10;
// console.log(typeof a.toString());
// console.log(Number(10).toString());
// console.log(10 + "");
// console.log(String(10));

// let a = 10.345677;
// console.log(a.toFixed(2));
// console.log(a.toFixed(4));
// console.log(a.toFixed(6));
// console.log(a.toFixed(8));

// let a = "10";
// console.log(typeof Number.parseInt(a));

// let a = "3455634sajid";
// console.log(typeof Number.parseFloat(a));
// console.log(typeof Number.parseFloat("12hello7u3yn7"));

// console.log(isNaN(Number("sajid"))); //true
// console.log(isNaN(10)); //false

// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.NaN);
// console.log(Number.MAX_VALUE);
