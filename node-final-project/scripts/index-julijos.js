// Variables
const signInButton = document.querySelector(".sign-in");
const closeBtn = document.querySelector(".closebtn");

// Function
function openSignIn() {
  document.getElementById("mySignIn").style.height = "100%";
  document.getElementById("mySignIn").style.width = "50%";
  document.getElementById("mySignIn").style.justifyContent = "center";
}
function closeSignIn() {
  document.getElementById("mySignIn").style.height = "0%";
}

// Events
signInButton.addEventListener("click", () => openSignIn);
closeBtn.addEventListener("click", () => closeSignIn);
