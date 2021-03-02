// Variables
const routes = require("./routes");

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
