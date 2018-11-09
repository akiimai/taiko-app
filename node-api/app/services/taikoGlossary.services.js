const mssql = require('mssql'); 
const { TYPES } = require('tedious'); 

const readAll = () => {
    const promise = mssql.executeProc("TaikoGlossary_ReadAll") 
        .then(response => {
            return response.resultSets[1]
        })
        .catch(responseErrorHandler)
    return promise 
}

const responseErrorHandler = (error) => {
    if (error && error.response && error.response.data && error.response.data.errors) {
        console.log(error.response.data.errors); 
    }

    Promise.reject()
}

module.exports = {
    readAll
}