module.exports = {
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
