const validate = require('validate.js');

const Utils = require('../utils/utils');
const Constants = require('../utils/constants');
const HeroesRepository = require('../port/heroes_repository');
const Constraints = require('../utils/heroes_validation');

const Heroes = {
    async create(data) {
        try {
            const validation = validate.validate(data, Constraints.create);
            if (validation) {
                const response = Constants.ErrorValidation;
                response.message = validation;
                return response;
            }

            data.id = Utils.generateUuid();

            const response = await HeroesRepository.create(data);

            if (response.code === 11000) {
                const result = Constants.ErrorDuplicate;
                return result;
            }
            return response;
        } catch (error) {
            return error;
        }
    },

    async list() {
        try {
            const response = await HeroesRepository.list();

            return response;
        } catch (error) {
            return error;
        }
    },
};
module.exports = Heroes;