const { getDT } = require('../models/modelDT');

const getHomePage = (req, res) => {
    const model = getDT('home');
    res.render('date.ejs', model);
}; // Контроллер для главной страницы

const getDateTime = (req, res) => {
    const model = getDT('dt');
    res.render('date.ejs', model);
}; // Контроллер для страницы с датой и временем

const notFound = (req, res) => {
    res.status(404).send('Ошибка 404: Страница не найдена');
}; // Контроллер для обработки 404

module.exports = {
    getHomePage,
    getDateTime,
    notFound
};