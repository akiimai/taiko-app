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

const readById = (id) => {
    const promise = mssql.executeProc("TaikoDrills_Select_ById", sqlRequest => {
        sqlRequest.addParameter("Id", TYPES.Int, id)
    })
        .then(response => {
            return response.resultSets[0]
        })
        .catch(responseErrorHandler)
    return promise; 
}

const create = (item) => {
    const promise = mssql.executeProc("TaikoDrills_Insert", sqlRequest => {
        sqlRequest.addParameter("Name", TYPES.NVarChar, item.data.name, {
            length: 200
        }); 
        sqlRequest.addParameter("Description", TYPES.NVarChar, item.data.description, {
            length: 3000
        });
        sqlRequest.addParameter("LevelId", TYPES.Int, item.data.level); 
        sqlRequest.addParameter("EquipmentId", TYPES.Int, item.data.equipment); 
        sqlRequest.addParameter("TypeId", TYPES.Int, item.data.type); 
        sqlRequest.addParameter("Length", TYPES.Int, item.data.drillLength); 
        sqlRequest.addOutputParameter("Id", TYPES.Int, null); 
    })
        .then(response => {
            return response
        })
        .catch(responseErrorHandler)
    return promise; 
}

const deleteById = (id) => {
    let test = parseInt(id)
    const promise = mssql.executeProc("TaikoDrills_Delete", sqlRequest => {
        sqlRequest.addParameter("Id", TYPES.Int, test); 
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
    readById, 
    create, 
    deleteById
}