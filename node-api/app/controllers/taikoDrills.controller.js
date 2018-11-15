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
    return taikoDrillsServices.create(req.body)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(err => {
            res.status(500).send(err); 
        })
}

const updateById = (req, res) => {
    const id = parseInt(req.params.id)
    return taikoDrillsServices.updateById(id, req.body)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(err => {
            res.status(500).send(err); 
        })
}

const deleteById = (req, res) => {
    return taikoDrillsServices.deleteById(req.params.id)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(err => {
            res.status(500).send(err); 
        })
}

module.exports = {
    readAll, 
    create, 
    updateById, 
    deleteById
}

