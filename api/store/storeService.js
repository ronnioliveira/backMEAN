//importo o conteúdo do arquivo store
const Store = require('./store');

//aqui será realizada a criação da nossa API REST baseada nos verbos do HTTP GET, POST, PUT e DELETE. Sabemos que existem mais verbos, mas para o nosso exemplo esses são suficientes. Isso é criado pelo nodeRestful
//para fazer isso, basta criar um array de string dentro do methods, com os verbos necessários
//apenas com essa linha de código no nodeRestful cria uma API REST para os verbos abaixo
Store.methods(['get', 'post', 'put', 'delete'])
Store.updateOptions({new: true})

//realizo a exportação do conteúdo
module.exports = Store;
