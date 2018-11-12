const mssql = require('../../mssql'); 
const { TYPES } = require('tedious'); 

const readAll = () => {
    const promise = mssql.executeProc("TaikoGlossary_SelectAll") 
        .then(response => {
            return response.resultSets[0]
        })
        .catch(responseErrorHandler)
    return promise 
}

const responseErrorHandler = (error) => {
    if (error && error.response && error.response.data && error.response.data.errors) {
        console.log(error.response.data.errors); 
    }

    return Promise.reject(error)
}

module.exports = {
    readAll
}