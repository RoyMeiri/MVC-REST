const article = require('../models/articles')

exports.getAllArticles = (req, res) => {
res.json(article.getAllArticles());
}

exports.getArticleById = (req, res) => {
const foundArticle = article.getArticle(parseInt(req.params.id));
    if (!foundArticle) {
        return res.status(404).json({ message: 'Article not found' });
    }
    res.json(foundArticle);
}

exports.createArticle = (req, res) => {
    const { title,content} = req.body;
    if (!title || !content) {
        return res.status(400).json({ message: 'Title and content are required' });
    }
    const newArticle = article.createArticle(title, content);
    res.status(201).location(`/api/articles/${newArticle.id}`).end();
}

exports.updateArticle = (req, res) => {
    const id = parseInt(req.params.id);
    const { title, content } = req.body;
    const updatedArticle = article.updateArticle(id, title, content);

    if (!updatedArticle) {
        return res.status(404).json({ message: 'Article not found' });
    }
    res.json(updatedArticle);
};

exports.deleteArticle = (req, res) => {
    const id = parseInt(req.params.id);
    const deleted = article.deleteArticle(id);

    if (!deleted) {
        return res.status(404).json({ message: 'Article not found' });
    }
    res.status(204).end();
};

