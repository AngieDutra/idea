module.exports = (req, res, next) => {
    res.locals.styles = ['styles.css'];
    next();
}