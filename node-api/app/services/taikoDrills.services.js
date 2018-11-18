const mssql = require('../../mssql'); 
const { TYPES } = require('tedious'); 

const readAll = () => {
    return mssql.executeProc("TaikoDrills_SelectAll")
        .then(response => {
            return response.resultSets[0]
        })
        .catch(responseErrorHandler);
}

const readById = id => {
    return mssql.executeProc("TaikoDrills_Select_ById", sqlRequest => {
        sqlRequest.addParameter("Id", TYPES.Int, id)
    })
        .then(response => {
            return response.resultSets[0]
        })
        .catch(responseErrorHandler);
}

const create = item => {
    const promise = mssql.executeProc("TaikoDrills_Insert", sqlRequest => {
        sqlRequest.addParameter("Name", TYPES.NVarChar, item.name, {
            length: 200
        }); 
        sqlRequest.addParameter("Description", TYPES.NVarChar, item.description, {
            length: 3000
        });
        sqlRequest.addParameter("DrillLevel", TYPES.NVarChar, item.level, {
            length: 50
        }); 
        sqlRequest.addParameter("Length", TYPES.Int, item.drillLength); 
        sqlRequest.addParameter("EquipmentId", TYPES.Int, item.equipment); 
        sqlRequest.addParameter("TypeId", TYPES.Int, item.type); 
        sqlRequest.addOutputParameter("Id", TYPES.Int, null); 
    })
        .then(response => {
            return response
        })
        .catch(responseErrorHandler)
    return promise; 
}

const updateById = (id, item) => {
    return mssql.executeProc("TaikoDrills_Update_ById", sqlRequest => {
        sqlRequest.addParameter("Name", TYPES.NVarChar, item.name, {
            length: 200
        }); 
        sqlRequest.addParameter("Description", TYPES.NVarChar, item.description, {
            length: 3000
        });
        sqlRequest.addParameter("DrillLevel", TYPES.NVarChar, item.level, {
            length: 50
        }); 
        sqlRequest.addParameter("Length", TYPES.Int, item.drillLength); 
        sqlRequest.addParameter("EquipmentId", TYPES.Int, item.equipment); 
        sqlRequest.addParameter("TypeId", TYPES.Int, item.type); 
        sqlRequest.addParameter("Id", TYPES.Int, id); 
    })
}

const deleteById = (id) => {
    const test = parseInt(id)
    return mssql.executeProc("TaikoDrills_Delete", sqlRequest => {
        sqlRequest.addParameter("Id", TYPES.Int, test);
    })
        .then(response => {
            return response
        })
        .catch(responseErrorHandler);
}

const responseErrorHandler = (error) => {
    if (error && error.response && error.response.data && error.response.data.errors) {
        console.log(error.response.data.errors)
    }
    return Promise.reject(error)
}

module.exports = {
    readAll, 
    readById, 
    create, 
    updateById, 
    deleteById
}