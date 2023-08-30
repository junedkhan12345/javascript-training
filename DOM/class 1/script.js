// console.log(document);
// console.log(document.getElementById("hello"));
// document.getElementById("hello").style.backgroundColor = "green";
// document.getElementById("hello").style.color = "red";
// document.getElementById("hello").style.fontSize = "18px";

console.log(document.getElementById("hello"));
// console.log(document.getElementsByClassName("test"));

const pTag = document.getElementById("hello");
pTag.style.backgroundColor = "blue";
pTag.style.color = "red";
pTag.style.fontSize = "30px";

pTag.innerHTML = "<i>hello javascript</i> <b>wecode</b>";

// pTag.hidden = true;
// pTag.hidden = false;

// setInterval(() => {
//   pTag.hidden = !pTag.hidden;
// }, 1000);

const myImg = document.getElementById("image");
myImg.style.height = "200px";
myImg.style.width = "200px";

document.getElementById("myText").textContent = "hello nodejs";

document.getElementsByClassName("test")[1].style.backgroundColor = "yellow";

document.getElementsByTagName("h2")[0].style.backgroundColor = "yellow";
document.getElementsByTagName("h2")[1].style.backgroundColor = "skyblue";

//Query selecdtor
// document.querySelector("#myName").style.backgroundColor = "green";
// // document.querySelector(".wecode").style.backgroundColor = "green"; //nahi hoga
// document.querySelectorAll(".wecode")[1].style.backgroundColor = "green";

for (let obj of document.querySelectorAll(".wecode")) {
  obj.style.backgroundColor = "green";
}
