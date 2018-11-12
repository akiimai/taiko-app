const router = require('express').Router()
const taikoDrillsController = require('../controllers/taikoDrills.controller')

router.get('/', taikoDrillsController.readAll); 
router.post('/', taikoDrillsController.create); 

module.exports = router;  