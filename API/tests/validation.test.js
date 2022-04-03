const Constants = require('../src/utils/Constants');
const Validation = require('../src/utils/validation');


test('Caso válido - Verificando dados para enviar no banco', () => {
    const result = Validation.create({
        nome:"Hulk",
        poder:"Força",
        forca:2000,
        origem:"EUA"
    });
    expect(result).toEqual(undefined);
});


test('Caso inválido - Retirando nome', () => {
    const result = Validation.create({
        nome:"Hulk",
        poder:"Força",
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});