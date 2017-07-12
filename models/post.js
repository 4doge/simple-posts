const mongoose = require('mongoose');


const postSchema = new mongoose.Schema({
    username: {
        type: String,
        required: 'Username can\'t be empty!',
        validate: {
            validator: function checkUsername(value) {
                const re = /^[\w\d]+$/;
                return re.test(value);
            },
            message: '`{VALUE}` is not a valid username!'
        }
    },
    text: {
        type: String,
        required: 'Text can\'t be empty!',
        validate: {
            validator: function checkEmail(value) {
                const re = /^.{1,200}$/;
                return re.test(value);
            },
            message: '`{VALUE}` is more than 200 symbols!'
        }
    }
}, {
    timestamps: true
});


module.exports = mongoose.model('Post', postSchema);
