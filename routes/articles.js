const express = require('express');
const router = express.Router();
const controllers = require('../controllers/articles');

router.route('/')
    .get(controllers.getAllArticles)
    .post(controllers.createArticle);

router.route('/:id')
    .get(controllers.getArticleById)
    .put(controllers.updateArticle)
    .delete(controllers.deleteArticle);

module.exports = router;

