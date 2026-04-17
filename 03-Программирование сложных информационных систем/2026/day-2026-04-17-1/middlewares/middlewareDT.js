const notFound = (req, res) => {
    res.status(404).send('Ошибка 404: Страница не найдена');
};

const setCharset = (req, res, next) => {
    res.set('Content-Type', 'text/html; charset=utf-8');
    next();
};

const logger = (req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
};

module.exports = {
    notFound,
    setCharset,
    logger
}