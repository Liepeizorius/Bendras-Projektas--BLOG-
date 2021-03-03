const { response } = require("express");
const Article = require("./articleModel.js");

getAllArticles = (request, response) => {
  console.log(0);
  Article.find({}, (items, error) => {
    if (error) return response.json(error);
    response.json(items);
  });
};

changeArticleImage = async (req, res) => {
  let file = req.file;
  let user = req.user;
  try {
    user.articleImageURL = file.path;
    await user.save();
    res.json(response);
    res.json(user);
  } catch (e) {}
};
