// Variables
const signInButtons = document.querySelectorAll(".sign-in");
const closeBtn = document.querySelector(".closebtn");

// Function
async function openSignIn() {
  document.getElementById("mySignIn").style.height = "100%";
  document.getElementById("mySignIn").style.width = "50%";
  document.getElementById("mySignIn").style.justifyContent = "center";
}
async function closeSignIn() {
  document.getElementById("mySignIn").style.height = "0%";
  document.getElementById("mySignIn").style.width = "0%";
}

// Events
// signInButtons.forEach((item) => {
//   item.addEventListener("click", openSignIn);
// });
// closeBtn.addEventListener("click", closeSignIn);
