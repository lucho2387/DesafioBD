const express = require('express');
const router = express.Router();
const ControladorMensajes = require('../controllers/ControllerMensajes');

router.post('/mensajes', async (req, res) => {
    try {
        // const {id,email,mensaje} = req.body
        await ControladorMensajes.guardar(req.body);
        res.status(201).json({mensaje: "El mensaje se guardo correctamente"})
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/mensajes', async (req, res) => {
    try {
        let mensajes = await ControladorMensajes.buscar(req.query);
        res.send(mensajes);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
