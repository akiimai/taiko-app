const mssql = require('../../mssql'); 
const { TYPES } = require('tedious'); 

const readAll = () => {
    const promise = mssql.executeProc("TaikoDrills_SelectAll")
        .then(response => {
            return response.resultSets[0]
        }) 
        .catch(responseErrorHandler)
    return promise; 
}

const create = (data) => {
    debugger
    const promise = mssql.executeProc("TaikoDrills_Insert", sqlRequest => {
        sqlRequest.addParameter("Name", TYPES.NVarChar, data.name, {
            length: 200
        }); 
        sqlRequest.addParameter("Description", TYPES.NVarChar, data.description, {
            length: 3000
        });
        sqlRequest.addParameter("LevelId", TYPES.Int, data.levelId); 
        sqlRequest.addParameter("Length", TYPES.Int, data.length); 
        sqlRequest.addOutputParameter("Id", TYPES.Int, null); 
    })
        .then(response => {
            return response
        })
        .catch(responseErrorHandler)
    return promise; 
}

const responseErrorHandler = (error) => {
    if (error && error.response && error.response.data && error.response.data.errors) {
        console.log(error.response.data.errors)
    }
    return Promise.reject(errors)
}

module.exports = {
    readAll, 
    create
}