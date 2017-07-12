module.exports = {
    // Database settings
    mongoose: {
        uri: 'mongodb://localhost/eleken',
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
