const taikoDrillsServices = require('../services/taikoDrills.services'); 

const readAll = (req, res) => {
    const readAll = taikoDrillsServices.readAll();
    if (req.url === "/?all") {
        return readAll
            .then(response => {
                res.status(200).json(response)
            })
            .catch(err => {
                res.status(500).send(err);
            })
    } else if (req.url === "/") {
        return readAll
            .then(response => {
                const arrLength = response.length;
                const item = 1 + Math.floor(Math.random() * arrLength)
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

const deleteById = (req, res) => {
    let id = parseInt(req.params.id)
    const promise = taikoDrillsServices.deleteById(id)
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
    create, 
    deleteById
}

