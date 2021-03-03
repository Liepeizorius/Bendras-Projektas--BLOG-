let token;
let globalArticles;
let url = "http://localhost:1111/api/v1/scripts/Back-end/";
window.addEventListener("DOMContentLoaded", function () {
  token = localStorage.getItem("user-auth");
  if (!token) {
    window.location.href = "/article-display";
  }
  getAllArticles();
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
    // console.log(e);
  }
}
// Displaying an article
const displayAllArticles = (articles) => {
  let div = document.querySelector("#article-display");
  let articleItems = "";
  articles.forEach((article) => {
    articleItems += `
    <div><img src="" alt="" class="article-image" />${article.articleImageURL}</div>
    <h3 class="headline">${article.headline}</h3>
    <div class="text-body">${article.textarea}</div>
    `;
  });
  div.innerHTML = articleItems;
};
