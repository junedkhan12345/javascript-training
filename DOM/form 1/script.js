function validate() {
  let myName = document.getElementById("name").value;
  let myAge = document.getElementById("age").value;
  let myPassword = document.getElementById("password").value;
  let myEmail = document.getElementById("e-mail").value;

  if (!myName) {
    window.alert("please enter your name");
    return false;
  }
  if (!myAge) {
    window.alert("please enter your age");
    return false;
  }
  if (!myPassword) {
    window.alert("please enter your password");
    return false;
  }
  if (!myEmail) {
    window.alert("please enter your email");
    return false;
  }
}
