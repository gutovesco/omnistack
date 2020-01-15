const { Router } = require('express');
const DevControler = require('./controllers/DevControler');
const SearchControler = require('./controllers/SearchControler');
const routes = Router();

routes.get('/devs', DevControler.index);
routes.post('/devs', DevControler.store);

routes.get('/search', SearchControler.index);

module.exports = routes;