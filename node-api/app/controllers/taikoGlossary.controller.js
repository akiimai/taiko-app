const taikoGlossaryServices = require('../services/taikoGlossary.services'); 

const readAll = (req, res) => { 
    return taikoGlossaryServices.readAll()
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