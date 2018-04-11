//importo a dependência do express
const express = require('express');

module.exports = function (server) {

    //atribuo o roteador do express a constante router
    const router = express.Router();

    //middleware que será chamado sempre que existir a palavra api dentro da url, ou seja, sempre terá que ter a palavra api para conseguir fazer a rota definida abaixo
    //tudo que vier de /api, vai ser chamado o router, que é a função express.Router();
    server.use('/api', router);

    //vou importar os serviços que criamos
    const storeService = require('../api/store/storeService');

    //register é um método node restful que diz que todos os serviços irão utilizar como url raiz 'store'
    storeService.register(router, '/stores')

    // // // // // //lembrando que esse router só será executado se houver '/api' na url, como foi dito na linha server.use('/api', router)
    // // // // // router.route('/teste').get(function(req, res, next){
    // // // // //     res.send('funcionou')
    // // // // // })

}

