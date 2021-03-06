const mongoose = require('mongoose');

const url = 'mongodb+srv://admin:admin@cluster0.j3zzr.mongodb.net/myFirstDatabase?';

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const { Schema } = mongoose;

const HeroesSchema = new Schema({
    id: {
        type: String,
        index: true,
        unique: true,
    },
    nome: String,
    poder: String,
    forca: Number,
    origem: String
});

const HeroesModel = mongoose.model('HeroesModel', HeroesSchema);

module.exports = {
    HeroesModel,
};