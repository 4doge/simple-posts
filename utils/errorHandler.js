module.exports = function(err) {
    let errorMessages = [];
    for (let errKey in err.errors) {
        if (err.errors.hasOwnProperty(errKey)) {
            errorMessages.push(err.errors[errKey].message);
        }
    }
    return {errors: errorMessages};
};
