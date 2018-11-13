const taikoDrillsServices = require('../services/taikoDrills.services'); 

const readAll = (req, res) => {
    return taikoDrillsServices.readAll()
        .then(response => {
            const arrLength = response.length; 
            const item =  1 + Math.floor(Math.random() * arrLength)
            return response[item]
        })
        .then(response => {
            return taikoDrillsServices.readById(response.Id)
        })
        .then(response => {
            res.status(200).json(response)
        })
        .catch(err => {
            res.status(500).send(err); 
        }) 
}

const create = (req, res) => {
    const promise =  taikoDrillsServices.create(req.body)
    promise
        .then(response => {
            res.status(200).json(response)
        })
        .catch(err => {
            res.status(500).send(err); 
        })
    return promise
}

module.exports = {
    readAll, 
    create
}

