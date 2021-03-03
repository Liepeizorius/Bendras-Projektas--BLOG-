// Variables
let token;
let globalArticles;
let url = "http://localhost:1111/api/v1/";
window.addEventListener("DOMContentLoaded", function () {
  token = localStorage.getItem("user-auth");
  if (!token) {
    window.location.href = "/user-write";
  }
  getAllArticles();
});
// Input išsiuntimas į serverį
document.getElementById("submit-story").addEventListener("click", async () => {
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
async function getAllArticles() {
  try {
    const response = await fetch(url + "article", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "user-auth": token,
      },
    });
    if (response.status != 200) throw await response.json();
    let items = await response.json();
    globalArticles = items;
    displayAllArticles(items);
  } catch (e) {
    console.log(e);
  }
}
// Displaying all articles
const displayAllArticles = (articles) => {
  let div = document.querySelector(".user-article-headline");
  let articleItems = "";
  articles.forEach((article) => {
    articleItems += `<h2 class="user-article-headline">${article.headline}</h2>`;
  });
  div.innerHTML = articleItems;
};

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
    formData.append("key", "value");

    try {
      const response = await fetch(url + "uploadImage", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "user-auth": token,
        },
        body: formData,
      });
      console.log(response);
      if (response.status != 200) throw await response.json();
      let user = await response.json();
      // Sukurti diva straipsnio nuotraukai
      document.getElementById("article-display").src =
        "http://http://localhost:1111/" + user.articleImageURL;
    } catch (e) {
      console.log(e);
    }
  });
