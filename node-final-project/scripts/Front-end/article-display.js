let token;
let globalArticles;
let url = 'http://localhost:1111/api/v1/';
window.addEventListener('DOMContentLoaded', function () {
  token = localStorage.getItem('user-auth');
  if (!token) {
    window.location.href = '/article-display';
  }
  getAllArticles();
});

// Functions
async function getAllArticles() {
  try {
    const response = await fetch(url + 'scripts/getallarticles', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'user-auth': token,
      },
    });
    if (response.status != 200) throw await response.json();
    let items = await response.json();
    console.log(items);
    globalArticles = items;
    displayAllArticles(items);
  } catch (e) {
    // console.log(e);
  }
}
// Displaying an article
async function displayAllArticles(articles) {
  let div = document.querySelector('#article-display');
  let articleItems = '';
  articles.forEach((article) => {
    articleItems += `
    <div class="article-container container-fluid">
      <div><img src="http://localhost:1111/${article.articleImageURL}" alt="" class="article-image" /></div>
      <h3 class="headline">${article.headline}</h3>
      <div class="text-body">${article.textarea}</div>
      <div class="wrapper">
            <div class="btn" onclick="likeFunction()">
              <div id="btn__element">Like</div>
              <div id="btn__state">0</div>
            </div>
          </div>
    </div>
    `;
  });
  div.innerHTML = articleItems;
}
