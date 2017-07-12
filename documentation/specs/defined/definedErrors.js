// ------------------------------------------------------------------------------------------
// ALL
// ------------------------------------------------------------------------------------------

/**
 * @apiDefine ErrorsList
 *
 * @apiError {String[]} errors Array of errors messages
 * @apiErrorExample {json} Error-Response:
 * HTTP/1.1 400 Bad Request
 * {
 *     "errors": [
 *         "`Turmoil has engulfed the Galactic Republic. The taxation of trade routes to outlying star systems is in dispute. Hoping to resolve the matter with a blockade of deadly battleships, the greedy Trade Federation has stopped` is more than 200 symbols!",
 *         "`darth maul` is not a valid username!"
 *
 *     ]
 * }
 */
