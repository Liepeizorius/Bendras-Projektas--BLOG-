// Variables
let token;
let globalItems;
let url = "http://localhost:1111/api/v1/";
window.addEventListener("DOMContentLoaded", function () {
  token = localStorage.getItem("user-auth");
  if (!token) {
    window.location.href = "/user-write";
  }
  getAllItems();
});
// Input išsiuntimas į serverį
document.getElementById("submitButton").addEventListener("click", async () => {
  let value = document.querySelector("form").value;
  if (!value) return;
  let body = {
    headline: value,
    author: value,
    articleBody: value,
    image: value,
  };
  try {
    const response = await fetch(url + "user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "user-auth": token,
      },
      body: JSON.stringify(body),
    });
    if (response.status != 200) throw await response.json();
    let createdItem = await response.json();
    globalItems.push(createdItem);
    // displayAllItems(globalItems);
    document.querySelector("form").value = "";
  } catch (e) {
    console.log(e);
  }
});
// Functions
function displayNavBar() {
  document.querySelector(".nav-items").style.display = "block";
}

// Image upload function
document
  .getElementById("uploadFile")
  .addEventListener("click", async function () {
    if (document.getElementById("fileInput").files.length === 0) return;
    let file = document.getElementById("fileInput").files[0];
    console.log(file);

    let formData = new FormData();
    formData.append("test", file);

    try {
      const response = await fetch(url + "uploadImage", {
        method: "POST",
        headers: {
          "user-auth": token,
        },
        body: formData,
      });
    } catch (e) {
      console.log(e);
    }
  });
