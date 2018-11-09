const taikoGlossaryServices = require('../services/taikoGlossary.services'); 

const readAll = (req, res) => { 
    const promise = taikoGlossaryServices.readAll()

    return promise
        .then(response => {
            res.status(200).json(response)
        })
        .catch(err => {
            res.status(500).send(err)
        })
}

module.exports = {
    readAll
}