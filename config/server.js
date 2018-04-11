const port = 2112 //Porta que a aplicação irá ser executada
const bodyParser = require('body-parser') //facilitador para transfomar o que vem em algo legível, por exemplo, transforma um JSON em um objeto
const express = require('express') //framework web que utilizaremos com o node.
const server = express();

//esses dois middlewares abaixo serão utilizados para todas as requisições, pois não está passando nenhuma URL específica.
server.use(bodyParser.urlencoded({ extended: true })); //quando você submenter um formulário do frontend, ele virá no formato urlencoded. Essa linha diz que o bodyparser poderá interpretar mais do que o padrão.
server.use(bodyParser.json()); //se os dados que forem submetidos, não estiverem no formato suportado pela linha acima, então será verificado se o body é um JSON. Se for, então transforma isso em um objeto.

server.listen(port, function () { //faço o servidor escutar a porta declarada na constante
    console.log('Backend is running');
})

module.exports = server;