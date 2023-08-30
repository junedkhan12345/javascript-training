// section 1//

// function test() {
//   document.getElementById("hello");
//   console.log("wecode academy");
// }

// let count = 0;
// function test() {
//   const text = document.getElementById("test").value.toUpperCase();
//   document.getElementById("test").value = text;
//   console.log(text);
// }

// function hello() {
//   ++count;
//   document.getElementById("hi").textContent = count;
// }

// function hello() {
//   document.getElementById("hi").innerHTML =
//     "<span onclic='test()'><b>hello nodejs</b></span>";
// }

// section 3//

// document.getElementById("heading").addEventListener("dblclick", (event) => {
//   console.log(event);
//   alert("wecode");
// });

// section 3////////////////

document.getElementById("one").addEventListener("click", () => {
  const element = document.getElementById("first");
  element.hidden = !element.hidden;
});

document.getElementById("two").addEventListener("click", () => {
  const element = document.getElementById("second");
  element.hidden = !element.hidden;
});

document.getElementById("three").addEventListener("click", () => {
  const element = document.getElementById("third");
  element.hidden = !element.hidden;
});

setInterval(() => {
  const element = document.getElementById("first");
  element.hidden = !element.hidden;
}, 1000);

setInterval(() => {
  const element = document.getElementById("second");
  element.hidden = !element.hidden;
}, 2000);

setInterval(() => {
  const element = document.getElementById("third");
  element.hidden = !element.hidden;
}, 3000);
