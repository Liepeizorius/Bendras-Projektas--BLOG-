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
  let div = document.querySelector('.article-info');
  let articleItems = '';
  articles.forEach((article) => {
    articleItems += `
    <div class="entry first-entry">
            <div class="article-info">
              <h4 class="username">
                <span class="topic-title">${article.headline}</span>
              </h4>
            </div>
            <div class="article-image">
              <i class="far fa-bookmark"></i>
              <img src="http://localhost:1111/${article.articleImageURL}" alt="" class="article-image"/>
            </div>
    </div>
    `;
  });
  div.innerHTML = articleItems;
}
