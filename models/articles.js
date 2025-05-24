let idCounter =  0;
const articles = [];

const getAllArticles = () => articles;

const getArticle = (id) => articles.find(a => a.id === id);

const createArticle = (title, content) => {
    const newArticle = { id: ++idCounter, title, content };
    articles.push(newArticle);
    return newArticle;
};

const updateArticle = (id, title, content) => {
    const article = articles.find(a => a.id === id);
    if (!article) {
        return null;
    }
    if (title !== undefined) {
        article.title = title;
    }
    if (content !== undefined) {
        article.content = content;
    }
    return article;
};
const deleteArticle = (id) => {
    const index = articles.findIndex(a => a.id === id);
    if (index === -1) {
        return null;
    }
    articles.splice(index, 1);
    return true;
};

module.exports = {
    getAllArticles,
    getArticle,
    createArticle,
    updateArticle,
    deleteArticle
};

