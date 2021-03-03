const { response } = require("express");
const Article = require("./articleModel.js");

getAllArticles = (request, response) => {
  console.log(0);
  Article.find({}, (items, error) => {
    if (error) return response.json(error);
    response.json(items);
  });
};
saveArticle = async (req, res) => {
  let article = new Article();
  article.headline = req.body.headline;
  article.textarea = req.body.textarea;
  article.articleImageURL = req.file.path;
  let articleSave = await article.save();
  res.json(articleSave);
};

// addArticleImage = async (req, res) => {
//   let file = req.file;
//   let article = req.article;
//   try {
//     article.articleImageURL = file.path;
//     await article.save();
//     res.json(response);
//     res.json(user);
//   } catch (e) {}
// };

module.exports = {
  getAllArticles,
  saveArticle,
};
