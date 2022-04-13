const { options } = require('../../options/mariaDB');
const knex = require('knex')(options); 

class Mensajes {
    constructor(id, email, fecha, mensaje){
        this.id = id,
        this.email = email,
        this.fecha = fecha,
        this.mensaje = mensaje
        
    }        
}

module.exports = {
    async list(req,res) {
        const results = await knex('mensaje')
        return res.json(results)
    },
    async create(req, res, next) {
        
        try {
            const {email,fecha,mensaje} = req.body
            await knex('mensaje').insert({
                email,
                fecha,
                mensaje
            })
            
            return res.status(201).json({mensaje: "El mensaje se guardo correctamente"})

        } catch (error) {
            next(error)
        }
        
    },
    async update(req, res, next) {
        
        try {
            const {email,fecha,mensaje} = req.body
            const { id } = req.params
            await knex('mensaje')
                .update({email,fecha,mensaje})
                .where({ id })
            
            return res.status(201).json({mensaje: "El mensaje se actualizo correctamente"})

        } catch (error) {
            next(error)
        }
        
    },
    async delete(req, res, next) {
        
        try {
            const { id } = req.params
            await knex('mensaje')
                .where({ id })
                .del()
                
            
            return res.status(200).json({mensaje: "El mensaje se elimino correctamente"})

        } catch (error) {
            next(error)
        }
        
    },
    Mensajes

}