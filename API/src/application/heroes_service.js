const validate = require('validate.js');

const Utils = require('../utils/utils');
const Constants = require('../utils/constants');
const HeroesRepository = require('../port/heroes_repository');
const Validation = require('../utils/validation');

const Heroes = {
    async create(data) {
        try {
            const validation = Validation.create(data);
            if (validation) {
                return validation;
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