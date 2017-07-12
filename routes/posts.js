const Router = require('koa-router');

const postCtrl = require('../controllers/posts');


const router = new Router();

router.get('/', postCtrl.getAllPosts);
router.post('/new', postCtrl.createNewPost);

module.exports = router;
