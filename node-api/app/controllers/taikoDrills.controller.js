const taikoDrillsServices = require('../services/taikoDrills.services'); 
const taikoEquipmentServices = require('../services/taikoEquipment.services'); 
const taikoTypeServices = require('../services/taikoType.services'); 

const readAll = (req, res) => {
    const readAll = taikoDrillsServices.readAll();
    if (req.url === "/?all") {
        return readAll
            .then(response => {
                res.status(200).json(response)
            })
            .catch(err => {
                res.status(500).send(err);
            })
    } else if (req.url === "/") {
        return readAll
            .then(response => {
                const arrLength = response.length;
                const item = Math.floor(Math.random() * arrLength)
                return response[item]
            })
            .then(response => {
                return taikoDrillsServices.readById(response.Id)
            })
            .then(response => {
                res.status(200).json(response)
            })
            .catch(err => {
                console.log(err)
                res.status(500).send(err);
            })
    }
}

const create = (req, res) => {
    const promise = taikoDrillsServices.create(req.body)
    promise
        .then(response => {
            const equipment = req.body.equipment //if array is 0
            for (let i = 0; i <= equipment.length - 1; i++) {
                const drillId = response.outputParameters.Id; 
                const equipmentId = equipment[i]; 
                taikoEquipmentServices.create(drillId, equipmentId)
            }

            const type = req.body.type
            for (let i = 0; i <= type.length - 1; i++) {
                const drillId = response.outputParameters.Id
                const typeId = type[i]
                taikoTypeServices.create(drillId, typeId)
            }

            res.status(200).json(response)
        })
        .catch(err => {
            res.status(500).send(err); 
        })
}

const updateById = (req, res) => {
    const id = parseInt(req.params.id)
    const promise = taikoDrillsServices.updateById(id, req.body)
    promise
        .then(response => {
            // taikoEquipmentServices.readById(id)
            //     .then(response => {
            //         for (let i = 0; i < response.length; i++) {
            //             if (!response[i]) {
            //                 taikoEquipmentServices.create(id, )
            //             } (response[i])
            //         }
            //     })
            // const equipment = req.body.equipment //if array is 0
            // for (let i = 0; i <= equipment.length - 1; i++) {
            //     const drillId = response.outputParameters.Id; 
            //     const equipmentId = equipment[i]; 
            //     taikoEquipmentServices.create(drillId, equipmentId)
            // }

            // const type = req.body.type
            // for (let i = 0; i <= type.length - 1; i++) {
            //     const drillId = response.outputParameters.Id
            //     const typeId = type[i]
            //     taikoTypeServices.create(drillId, typeId)
            // }

            res.status(200).json(response)
        })
        .catch(err => {
            res.status(500).send(err); 
        })
}

const deleteById = (req, res) => {
    return taikoDrillsServices.deleteById(req.params.id)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(err => {
            res.status(500).send(err); 
        })
}

module.exports = {
    readAll, 
    create, 
    updateById, 
    deleteById
}

