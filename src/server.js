const express = require('express');
const app = express();

app.use(express.json());


/* Configuracion de las rutas */
const mensajeRouter = require('./routes/mensajes');
const productoRouter = require('./routes/productos');
app.use('/api', mensajeRouter);
app.use('/api', productoRouter);


//NotFOund
app.use((req, res, next) => {
    const error = new Error('Pagina no Encontrada')
    error.mensaje = "Ruta no implementada"
    next(error)
})

/* En caso de una excepcion */
app.use((err, req, res, next) => {
    console.error(err.message);
    res.status(500).send(err);
});

// Servidor escucando en el puerto
const server = app.listen(8080, () => {
    console.log(`servidor escuchando en http://localhost:8080`);
});

// En Caso de error 
server.on('error', error => {
    console.log('error en el servidor:', error);
});
