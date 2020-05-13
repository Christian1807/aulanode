const express = require('express');
const routes = express.Router();
const connection = require('./database/connection');
const crypto = require('crypto');




routes.post('/usuario/', async (request, response) => {

    // receber parametros da requisição
    const {nome, idade} = request.body;
    const id = crypto.randomBytes(4).toString('HEX');

    // inserir os dados no banco de dados
    await connection('usuario').insert(
        {
            id,
            nome,
            idade
        }
    )

    return response.json({id});
} );



routes.get('/usuario/', async (request, response) => {
    const usuarios = await connection('usuario').select('*');

    return response.json(usuarios);
});



routes.post('/cliente/', async (request, response) => {

    // receber parametros da requisição
    const {nome, cpf, email, telefone} = request.body;
    const id = crypto.randomBytes(4).toString('HEX');

    // inserir os dados no banco de dados
    await connection('cliente').insert(
        {
            id,
            nome,
            cpf,
            email,
            telefone
        }
    )

    return response.json({id});
} );


routes.get('/cliente/', async (request, response) => {
    const clientes = await connection('cliente').select('*');

    return response.json(clientes);
});



routes.post('/produto/', async (request, response) => {

    // receber parametros da requisição
    const {nome, codigo_barra, valor, unidade} = request.body;
    
    // gerando o id
    const id = crypto.randomBytes(4).toString('HEX');

    // inserir os dados no banco de dados
    await connection('produto').insert(
        {
            id,
            nome,
            codigo_barra,
            valor,
            unidade
        }
    )

    return response.json({id});
} );


routes.get('/produto/', async (request, response) => {
    const clientes = await connection('produto').select('*');

    return response.json(clientes);
});




routes.post('/entrada/', async (request, response) => {

    // receber parametros da requisição
    const {nota_entrada, data_entrada, prouto, quantidade} = request.body;

    const id = crypto.randomBytes(4).toString('HEX');

    // inserir os dados no banco de dados
    await connection('entrada').insert(
        {
            id,
            nota_entrada,
            data_entrada,
            prouto,
            quantidade
        }
    )

    return response.json({id});
} );



routes.get('/entrada/', async (request, response) => {
    const entrada = await connection('entrada').select('*');

    return response.json(entrada);
});


routes.post('/saida/', async (request, response) => {

    // receber parametros da requisição
    const {nota_saida, data_saida, prouto, quantidade} = request.body;

    const id = crypto.randomBytes(4).toString('HEX');

    // inserir os dados no banco de dados
    await connection('saida').insert(
        {
            id,
            nota_saida,
            data_saida,
            prouto,
            quantidade
        }
    )

    return response.json({id});
} );



routes.get('/saida/', async (request, response) => {
    const saida = await connection('saida').select('*');

    return response.json(saida);
});


module.exports = routes;