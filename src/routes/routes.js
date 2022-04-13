const express  = require('express')
const routes = express.Router()
const ProductController = require('../controllers/ProductController')
const MessageController = require('../controllers/MessageController')

routes.get('/productos',ProductController.list)
routes.post('/productos',ProductController.create)
routes.put('/productos/:id',ProductController.update)
routes.delete('/productos/:id',ProductController.delete)

routes.get('/mensajes',MessageController.list)
routes.post('/mensajes',MessageController.create)
routes.put('/mensajes/:id',MessageController.update)
routes.delete('/mensajes/:id',MessageController.delete)

module.exports = routes