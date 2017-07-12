// ------------------------------------------------------------------------------------------
// POSTS
// ------------------------------------------------------------------------------------------

/**
 * @api {get} api/posts/ Get all posts
 * @apiName GetAllPosts
 * @apiGroup Posts
 * @apiVersion 1.0.0
 *
 * @apiUse ErrorsList
 *
 * @apiSuccess {Object[]} posts List of posts objects
 * @apiSuccess {String} articles._id Post object identifier
 * @apiSuccess {String} articles.username Post author username
 * @apiSuccess {String} articles.text Post body
 */


/**
 * @api {post} api/posts/new Create a new post
 * @apiName CreateNewPost
 * @apiGroup Posts
 * @apiVersion 1.0.0
 *
 * @apiParam {String} username Post author username <code>(only letters/digits allowed)</code>
 * @apiParam {String} text Post body <code>(no more than 200 symbols)</code>
 *
 * @apiParamExample {json} Request body example:
 * {
 *     "username": "luke",
 *     "text": "a long time ago in a galaxy far far away ..."
 * }
 *
 * @apiUse ErrorsList
 *
 * @apiSuccess {Object[]} posts List of posts objects
 * @apiSuccess {String} articles._id Post object identifier
 * @apiSuccess {String} articles.username Post author username
 * @apiSuccess {String} articles.text Post body
 */
