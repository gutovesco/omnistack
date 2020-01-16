const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-s1enp.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(cors())
app.use(express.json());
app.use(routes);

//post = criar; put = editar; get = pegar
//parametros Querry: utilizados no get, nao aceita corpo, acessiveis atraves de req.query(filtros,ordenacao,paginacao,etc)
//parametros Route: Put ou Delete(deletar o id:1), acessiveis por request.params(identificar recurso na alteração ou remoção)
//Body: Put ou Post, é o corpo da requisição(JSON), acessivel por request.body(criar ou alterar registro) 

app.listen(3333);