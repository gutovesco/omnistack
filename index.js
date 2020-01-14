const express = require('express');

const app = express();

//post = criar; put = editar; get = pegar

app.get('/', ( request, response) => {
    return response.json({ message: 'Hello OmniStack'});
});

app.listen(3333);