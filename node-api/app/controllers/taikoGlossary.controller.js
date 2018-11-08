const taikoGlossaryServices = require('../services/taikoGlossary.services'); 

const readAll = () => { 
    const promise = taikoGlossaryServices.readAll()

    return promise
        .then()
        .catch()
}


module.exports = {
    readAll
}