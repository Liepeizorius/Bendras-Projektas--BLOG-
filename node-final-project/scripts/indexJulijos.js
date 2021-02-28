// Variables
const signInButtons = document.querySelectorAll(".sign-in");
const closeBtn = document.querySelector(".closebtn");
const signInInternal = document.querySelector(".signIn-internal");
const closeBtn2 = document.querySelector(".closebtn2");

// Function
async function openSignIn() {
  document.getElementById("mySignIn").style.height = "100%";
  document.getElementById("mySignIn").style.width = "50%";
  document.getElementById("mySignIn").style.margin = "auto";
  document.getElementById("mySignIn").style.justifyContent = "center";
}
async function closeSignIn() {
  document.getElementById("mySignIn").style.height = "0%";
  document.getElementById("mySignIn").style.width = "0%";
}
async function openInternalSignIn() {
  document.querySelector(".internal-signIn").style.height = "100%";
  document.querySelector(".internal-signIn").style.width = "50%";
  document.querySelector(".internal-signIn").style.margin = "auto";
  document.querySelector(".internal-signIn").style.justifyContent = "center";
}
async function closeInternalSignIn() {
  document.querySelector(".internal-signIn").style.height = "0%";
  document.querySelector(".internal-signIn").style.width = "0%";
}
// Events
signInButtons.forEach((item) => {
  item.addEventListener("click", openSignIn);
});
closeBtn.addEventListener("click", closeSignIn);
// Internal sign-in form open
signInInternal.addEventListener("click", openInternalSignIn);
closeBtn2.addEventListener("click", closeInternalSignIn);
