/* lowerStr and capStr function string */

// let str = "WeCode";
// let lowerStr = str.toLowerCase();
// let capStr = str.toUpperCase();
// console.log(lowerStr);
// console.log(str);
// console.log(capStr);
// console.log(str.toUpperCase());


// let str = "Juned";
// let lowerStr = str.toLowerCase();
// let capStr = str.toUpperCase();
// console.log(lowerStr);
// console.log(capStr);
// console.log(str);
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());


// let str = "Wecode Academy";
// let lowerStr = str.toLowerCase();
// let capStr = str.toUpperCase();
// console.log(str);
// console.log(lowerStr);
// console.log(capStr);
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());

// let str = "hello world";
// let lowerStr = str.toLowerCase();
// let capStr = str.toUpperCase();
// console.log(lowerStr);
// console.log(capStr);
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());


/* .trim function string */

// console.log(" juned ".trim());
// console.log(" WeCode   ".trim());
// console.log(" WeCode   ".trimEnd());
// console.log(" WeCode   ".trimStart());


/* stratswith function string*/

// console.log("Wecode".startsWith("W"));
// console.log("Wecode".startsWith("Wecode"));
// console.log("Wecode".startsWith("Wec"));
// console.log("Wecode".startsWith("wec")); //Case sensitive
// console.log("Wecode".startsWith("Wa"));

// console.log("juned".startsWith("j"));
// console.log("juned".startsWith("n"));
// console.log("Juned".startsWith("Juned"));
// console.log("Juned".startsWith("jun"));


/* endswith function string*/
// console.log("juned".endsWith("ed"));
// console.log("juned".endsWith("une"));
// console.log("Juned".endsWith("D"));
// console.log("Juned".endsWith("d"));

// console.log("Wecode".endsWith("e"));
// console.log("Wecode".endsWith("code"));
// console.log("Wecode".endsWith("ecode"));
// console.log("Wecode".endsWith("Code")); //Case sensitive
// console.log("Wecode".endsWith("da"));


/* .repeat function string */
// console.log("Hello ".repeat(5));
// console.log("124             ".repeat(3)); //Built-In functions

// console.log("juned  ".repeat(10));
// console.log("khan123      ".repeat(5));



/* .replace function string */

// console.log("WeCode Academy".replace("Academy", "Pvt. Ltd."));
// console.log("Hello World".replace("World", "Sir"));
// console.log("Hello World World".replace("World", "Sir")); //Replaces only 1 word

// console.log("juned bhai".replace("bhai", "khan"));
// console.log("my school school".replace("school", "college"));
// console.log("hello world".replace("hello", "all"));



/* .charAt function string */
// console.log("Hello World".charAt(4)); //Index starts from 0
// console.log("Hello World".charAt(7));
// console.log("juned khan".charAt(8));
// console.log("juned     khan".charAt(6));//this will be counting space
// console.log("juned     khan".charAt(11));



/* .concat function string */

// console.log("Hello ".concat("World"));
// console.log("juned".concat("khan"));
// console.log("juned    ".concat("khan khan"));
// console.log("Hello ".concat("My", " ", "Name", " ", "Is", " ", "Wecode", " ", "Academy"));
// console.log("hiiii".concat("my name is juned"));
// console.log("hiii".concat("my"," ", "name", " ", "is",  " ", "juned khan"));
// console.log("hiiii".concat("my" +" "+ "name" +" "+ "is" +" "+ "juned khan"));

// let str = "juned ";
// console.log(str.concat("khan"));



/* .indexOf function string */

// console.log("Hello World World".indexOf("World"));
// console.log("Hello World World".indexOf("o"));
// console.log("Hello World World".indexOf("ll"));
// console.log("Hello World World".indexOf("Work"));
// console.log("juned khan".indexOf("a"));
// if ("Hello World".indexOf("s") >= 0) {
//   console.log("Yes");
// } else {
//   console.log("No");
// }

// if("juned khan".indexOf("k") >= 0){
//     console.log("yes");
// }else{
//     console.log("no");
// }


// console.log("hello world world ".indexOf("work"));
// console.log("hello world world ".indexOf("wo"));


/* .includes function string */

// console.log("Hello World World".includes("World"));
// console.log("Hello World World".includes("o"));
// console.log("Hello World World".includes("ll"));
// console.log("Hello World World".includes("Work"));
// console.log("juned khan".includes("m"));
// if ("Hello World".includes("s")) {
//   console.log("Yes");
// } else {
//   console.log("No");
// }


// if("juned khan".includes("ha")){
//     console.log("yes");
// }else{
//     console.log("no");
// }


/* .split function string */

// console.log("Hello World".split(" "));
// console.log("Wecode academy".split("ac"));
// console.log("Wecode academy".split("code"));
// console.log("abababa".split("b"));
// console.log("abbaxbaab".split("b"));
// console.log("awecode".split("wecode"));
// console.log("wecodeb".split("wecode"));
// console.log("wecode".split("wecode"));
// console.log("My,Name,Is,Wecode,Academy".split(","));
// console.log("My$Name$Is$Wecode$Academy".split("$"));
// console.log("my&name&is&juned&khan".split("&"));
// console.log("bb".split("b"));
// console.log("aaa".split("a")); //1
// // // a_a_a
// console.log("Wecode".split()); //2
// console.log("Wecode".split("")); //3

// console.log("abababa".split("b"));
// console.log("wecode".split("wecode"));
// console.log("bb".split("b"));




/* .valueOf function string */

// let str = "Wecode";
// let str1 = new String("Wecode");
// console.log(typeof str, typeof str1);
// console.log(typeof str, typeof str1.valueOf());

// let str2 = "juned";
// let str3 = new String("juned");
// console.log(typeof str2, typeof str3);
// console.log(typeof str2, typeof str3.valueOf());

// let a = true;
// let b = new Boolean(true);
// console.log(typeof a, typeof b);
// console.log(typeof a, typeof b.valueOf());

// let c = false;
// let d = new Boolean(false);
// console.log(typeof c, typeof d);
// console.log(typeof a, typeof d.valueOf());


/* .lastIndexOf() function string */

// console.log("Wecode Academy".lastIndexOf("Academy"));
// console.log("Wecode Academy".indexOf("Academy"));

// console.log("Wecode Academy Academy".lastIndexOf("Academy"));
// console.log("Wecode Academy Academy".indexOf("Academy"));

// console.log("Wecode Academy Academy World Academy".lastIndexOf("Academy"));
// console.log("Wecode Academy Academy Academy".indexOf("Academy"));

// console.log("juned khan khan jaipur".lastIndexOf("khan"));
// console.log("juned khan khan jaipur".indexOf("khan"));



/* .padstart function string */

// console.log("95818".padStart(10, "*"));
// //5  10  10-5 = 5 ***
// console.log("95818".padStart(8, "*"));
// //5  8  8-5 = 3 *
// console.log("95818".padStart(6, "*"));
// //5  6  6-5 = 1 *
// console.log("95818".padStart(5, "*"));
// //5  5  5-5 = 0
// console.log("95818".padStart(3, "*"));
// //5  5  5-5 = 0

// console.log("88903".padStart(10, "$"));
// console.log("889036".padStart(8, "*"));
// console.log("88903".padStart(3, "#"));



/* .padEnd function string */

// console.log("88906".padEnd(10, "#"));
// console.log("88903".padEnd(3, "*"));
// console.log("88903".padEnd(8, "*"));

// console.log("95818".padEnd(10, "*"));
// //5  10  10-5 = 5 ***
// console.log("95818".padEnd(8, "*"));
// //5  8  8-5 = 3 *
// console.log("95818".padEnd(6, "*"));
// //5  6  6-5 = 1 *
// console.log("95818".padEnd(5, "*"));
// //5  5  5-5 = 0
// console.log("95818".padEnd(3, "*"));
// //5  5  5-5 = 0



/* .substr & .substring function string */

console.log("Wecode Academy Jaipur 302012".substring(2));
console.log("Wecode Academy Jaipur 302012".substr(2));
// //Both line 3 and 4 will give same output

console.log("Wecode Academy".substring(2, 4));
//start from 2 and take upto 4-1 3rd index - co
console.log("Wecode Academy".substr(2, 4));
//6 line 2 se start and take 4 characters - code

// console.log("juned khan".substring(4, 9));
// console.log("juned khan".substr(4, 9));

// console.log("Wecode Academy".substring(2, 6));
// console.log("Wecode Academy".substr(2, 6));

// console.log("juned khan bhai".substring(3, 10));
// console.log("juned khan bhai".substr(3, 10));

// console.log("Wecode Academy".substr(2));
// //Deprecate - Exists but not recommended for use
// console.log("Wecode Academy".substr(7));
// console.log("Wecode Academy Jaipur 302012".substr(2));

// console.log("Wecode Academy".substr(2, 4));
// console.log("Wecode Academy".substr(7, 3));
// console.log("Wecode Academy Jaipur 302012".substr(15, 6));

// console.log("Wecode Academy".substr(0, 2));




/* .slice function string */

console.log("Wecode Academy Jaipur 302012".slice(2));
console.log("Wecode Academy".slice(2, 4));
console.log("Wecode Academy".slice(2, 6));

console.log("juned khan".slice(3, 7));
console.log("my name is juned khan".slice(3, 19));

console.log("this is a laptop".slice(1, 8));
