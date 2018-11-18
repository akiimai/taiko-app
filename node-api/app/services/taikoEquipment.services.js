const mssql = require('../../mssql'); 
const { TYPES } = require('tedious'); 

const create = (item) => {
    return mssql.executeProc("EquipmentSelect_Insert", sqlRequest => {
        sqlRequest.addParameter("DrillId", TYPES.Int, item.drillId); 
        sqlRequest.addParameter("EquipmentId", TYPES.Int, item.equipmentId); 
        sqlRequest.addOutputParameter("Id", TYPES.Int, null); 
    })
    .then(response => {
        return response
    })
    .catch(responseErrorHandler); 
}

const readById = (id) => {
    return mssql.executeProc("EquipmentSelect_Select_ByDrillId", sqlRequest => {
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