// Variables
let url = 'http://localhost:1111/api/v1/scripts/Back-end/';
window.addEventListener('DOMContentLoaded', function () {
  token = localStorage.getItem('user-auth');
  if (!token) {
    window.location.href = '/article-display';
  }
  // getAllArticles();
});

function displayNavBar() {
  document.querySelector('.nav-items').style.display = 'block';
}

// Creating article input
document
  .getElementById('uploadFile')
  .addEventListener('click', async function (e) {
    e.preventDefault();
    if (document.getElementById('fileInput').files.length === 0) return;
    let file = document.getElementById('fileInput').files[0];
    console.log(file);

    let formData = new FormData();
    let headline = document.querySelector('#headline-input');
    let textarea = document.querySelector('#textarea1');
    formData.append('test', file);
    formData.append('headline', headline.value);
    formData.append('textarea', textarea.value);

    try {
      const response = await fetch(url + 'uploadImage', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'user-auth': token,
        },
        body: formData,
      });
      console.log(response);
      if (response.status != 200) throw await response.json();
      let user = await response.json();
      // Sukurti diva straipsnio nuotraukai
      document.getElementById('article-display').src =
        'http://localhost:1111/' + user.articleImageURL;
      window.location.href = './article-display.html';
    } catch (e) {
      console.log(e);
    }
  });
