const Koa = require('koa');
const Router = require('koa-router');
const views = require('koa-views');
const serve = require('koa-static');
const path = require('path');
const fs = require('fs');

require('./libs/mongoose');


const middlewares = fs.readdirSync(path.join(__dirname, 'middlewares')).sort();

const app = new Koa();
const router = new Router({
    prefix: '/api'
});


router.use('/posts', require('./routes/posts').routes());

app.use(serve('documentation/docs'));
app.use(views('documentation/docs'));

middlewares.forEach(function(middleware) {
    app.use(require('./middlewares/' + middleware));
});

app.use(router.routes());

module.exports = app.listen(process.env.PORT || 3000);
