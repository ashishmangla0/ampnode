const nunjucks = require('nunjucks')
const path = require('path');

nunjucks.configure(path.join(__dirname, 'views'), {
    autoescape: true,
});

module.exports = function(req, res) {
    res.send(nunjucks.render('index.html'));
};