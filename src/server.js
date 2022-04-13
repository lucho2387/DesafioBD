const express  = require('express')
const app = express()

const routes = require('./routes/routes')

app.use(express.json())
app.use(routes)

//NotFOund
app.use((req, res, next) => {
    const error = new Error('Pagina no Encontrada')
    error.status = 404
    next(error)
})

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({error: error.message})
})

app.listen(8080, () => console.log('El servidor esta corriendo en localhost:8080'))