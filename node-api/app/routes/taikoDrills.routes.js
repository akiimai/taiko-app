const router = require('express').Router()
const taikoDrillsController = require('../controllers/taikoDrills.controller')

router.get('/', taikoDrillsController.readAll); 
router.post('/', taikoDrillsController.create); 
router.delete('/:id', taikoDrillsController.deleteById); 
router.put('/:id', taikoDrillsController.updateById); 

module.exports = router;  