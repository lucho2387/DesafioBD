const express = require('express');
const router = express.Router();
const ControladorProductos = require('../controllers/ControllerProductos');

router.post('/productos', async (req, res) => {
    try {
        await ControladorProductos.guardar(req.body);
        res.status(201).json({mensaje: "El producto se guardo correctamente"})
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/productos', async (req, res) => {
    try {
        let productos = await ControladorProductos.buscar(req.query);
        res.send(productos);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
