const restful = require('node-restful') //facilita a forma de exepor uma API REST para o frontend
const mongoose = restful.mongoose;

//aqui eu vou criar os meus objetos no formato JSON para o Mongo, baseado na collection que criamos
const carSchema = new mongoose.Schema({
    name: { type: String, require: true }, //campo obrigatório
    model: { type: String, require: true }, //campo obrigatório
    year: { type: Number, min: 2000, max: 2019, require: [true, 'Informe por favor um ano válido'] }, //campo obrigatório com mensagem de validação, caso o valor digitado seja menor que 2000 ou maior que 2019
    price: { type: Number, min: 0, require: [true, 'O valor do veículo não pode ser negativo'] } //campo obrigatório com mensagem de validação, caso o valor digitado seja menor que zero
})

const storeSchema = new mongoose.Schema({
    name: { type: String, require: true },
    address: { type: String, require: false },
    cars: [carSchema] //aqui eu digo que a propriedade cars vai receber uma lista de carSchema
})

//abaixo vou expor o model storeSchema com o nome Store
//cada arquivo dentro do node é um module e essa é a forma de você expor para que outros arquivos tenham acesso ao seu conteúdo
module.exports = restful.model('Store', storeSchema)