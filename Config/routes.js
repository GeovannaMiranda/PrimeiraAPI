const express = require('express')
const routes = express.Router()



let db = [
    {id: '1', Nome: 'Cliente 1', Idade: '20'},
    {id: '2', Nome: 'Cliente 2', Idade: '30'},
    {id: '3', Nome: 'Cliente 3', Idade: '40'}
]

//http protocologo de internet
//Buscar Dados
routes.get('/', (req, res) => {
    return res.json(db)
})
//Inserir Dados
routes.post('/add', (req, res) =>{
    const body = req.body


    if(!body)
        return res.status(400).end()

    db.push(body)
    return res.json(body)
})

routes.delete('/:id', (req, res) =>{
    const id = req.params.id

    let newDB = db.filter(item => item.id !== id)

    db = newDB

    return res.send(newDB)
})

module.exports = routes