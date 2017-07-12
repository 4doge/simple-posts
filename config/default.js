module.exports = {
    // Database settings
    mongoose: {
        uri: 'mongodb://heroku_7nj9hjsl:uj3qd3a7sqo8sob5uh2d1nolln@ds143181.mlab.com:43181/heroku_7nj9hjsl',
        options: {
            server: {
                socketOptions: {
                    keepAlive: 1,
                },
                poolSize: 5
            }
        }
    }
};
