const express = require('express');
const route = express();
const controller = require('../controller/controller');

route.get('/', controller.indexdoc);
route.get('/view', controller.getView);
route.post('/appDoc', controller.appDoc);
route.get('/deleteDoc/:id', controller.deleteDoc);
route.get('/editDoc/:id', controller.editDoc); 
route.post('/updateDoc', controller.updateDoc);

module.exports = route;
