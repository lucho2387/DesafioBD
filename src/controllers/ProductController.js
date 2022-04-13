const knex = require('../DB/index')

class Productos {
    constructor(id, title, price, image){
        this.id = id,
        this.title = title,
        this.price = price,
        this.image = image
    }        
}

module.exports = {
    async list(req,res) {
        const results = await knex('producto')
        return res.json(results)
    },
    async create(req, res, next) {
        
        try {
            const {title,price,image} = req.body
            await knex('producto').insert({
                title,
                price,
                image
            })
            
            return res.status(201).json({mensaje: "El producto se guardo correctamente"})

        } catch (error) {
            next(error)
        }
        
    },
    async update(req, res, next) {
        
        try {
            const {title,price,image} = req.body
            const { id } = req.params
            await knex('producto')
                .update({title,price,image})
                .where({ id })
            
            return res.status(201).json({mensaje: "El producto se actualizo correctamente"})

        } catch (error) {
            next(error)
        }
        
    },
    async delete(req, res, next) {
        
        try {
            const { id } = req.params
            await knex('producto')
                .where({ id })
                .del()
                
            
            return res.status(200).json({mensaje: "El producto se elimino correctamente"})

        } catch (error) {
            next(error)
        }
        
    },
    Productos

}


