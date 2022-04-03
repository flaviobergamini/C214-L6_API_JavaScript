const validate = require('validate.js');
const Constants = require('./Constants');
const Constraints = require('./heroes_validation');

const Validation = {
    async create(data) {
        const validation = await validate.validate(data, Constraints.create);
        if (validation) {
            const response = Constants.ErrorValidation;
            response.message = await validation;
            return response;
        }
        return validation;
    }
};

exports.module = Validation;
