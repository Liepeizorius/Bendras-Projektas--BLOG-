const mongoose = require('mongoose');

let ArticleSchema = new mongoose.Schema({
    headline: {
      type: String,
      required: true,
    },
    textarea: {
      type: String,
      required: true,
      },
    },
  );
  
  let Article = mongoose.model('Article', ArticleSchema)

module.exports = Article;