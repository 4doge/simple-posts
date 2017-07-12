const Post = require('../models/post');
const errorHandler = require('../utils/errorHandler');

exports.getAllPosts = async function (ctx) {
    const posts = await Post.find({}).select('username text');
    ctx.body = {posts: posts};
};

exports.createNewPost = async function (ctx) {
    try {
        const post = new Post({
            username: ctx.request.body.username,
            text: ctx.request.body.text
        });
        await post.save();
        ctx.body = {success: true};
    } catch(e) {
        ctx.status = 400;
        ctx.body = errorHandler(e);
    }
};
