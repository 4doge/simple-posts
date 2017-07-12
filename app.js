const Koa = require('koa');
const Router = require('koa-router');
const path = require('path');
const fs = require('fs');

require('./libs/mongoose');


const middlewares = fs.readdirSync(path.join(__dirname, 'middlewares')).sort();

const app = new Koa();
const router = new Router({
    prefix: '/api'
});


router.use('/posts', require('./routes/posts').routes());

middlewares.forEach(function(middleware) {
    app.use(require('./middlewares/' + middleware));
});

app.use(router.routes());

app.listen(process.env.PORT || 3000);
