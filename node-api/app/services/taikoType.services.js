const mssql = require('../../mssql'); 
const { TYPES } = require('tedious'); 

const create = (drillId, typeId) => {
    return mssql.executeProc("TypeSelect_Insert", sqlRequest => {
        sqlRequest.addParameter("DrillId", TYPES.Int, drillId); 
        sqlRequest.addParameter("TypeId", TYPES.Int, typeId); 
        sqlRequest.addOutputParameter("Id", TYPES.Int, null); 
    })
    .then(response => {
        return response
    })
    .catch(responseErrorHandler); 
}

const readById = (id) => {
    return mssql.executeProc("TypeSelect_Select_ByDrillId", sqlRequest => {
        sqlRequest.addParameter("Id", TYPES.Int, id)
    })
    .then(response => {
        return response.resultSets[0]
    })
    .catch(responseErrorHandler); 
}

const responseErrorHandler = (error) => {
    if (error && error.response && error.response.data && error.response.data.errors) {
        console.log(error.response.data.errors)
    }
    Promise.reject(error); 
}

module.exports = {
    create, 
    readById
}