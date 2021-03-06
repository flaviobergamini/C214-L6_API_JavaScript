const { HeroesModel } = require('../infrastructure/database');

const HeroesRepository = {
    async create(data) {
        try {
            const model = new HeroesModel(data);
            const response = await model.save();
            return response.toObject();
        } catch (e) {
            return e;
        }
    },

    async list() {
        try {
            const result = await HeroesModel.find().exec();
            return result;
        } catch (error) {
            return error;
        }
    },

};

module.exports = HeroesRepository;