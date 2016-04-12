module.exports = function(req, res, next) {
    console.log('this is loading com', req.originalUrl);
    next();
}
