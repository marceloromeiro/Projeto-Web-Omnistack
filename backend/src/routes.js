const express = require('express');
const DevController = require('./controller/DevController');
const LikeController = require('./controller/LikeController')
const DislikeController = require('./controller/DislikeController')
const routes = express.Router();

  routes.get('/devs', DevController.index );
  routes.post('/devs/:devId/likes', LikeController.store);
  routes.post('/devs/:devId/dislikes', DislikeController.store);
  routes.post('/devs', DevController.store );
module.exports = routes;