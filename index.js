const express = require('express');
const nunjucks = require('nunjucks')
const app = express()
const port = 4000
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
nunjucks.configure('views', {
    autoescape: true,
    express: app
});
app.get('/', function(req, res) {
    res.render('index.html');
});