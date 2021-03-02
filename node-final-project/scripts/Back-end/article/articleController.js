const Article = require('./articleModel.js');

getAllArticles = (request, response) => {
    console.log(0);
    Article.find({}, (items, error) => {
      if (error) return response.json(error);
      response.json(items);
    });
  };
  