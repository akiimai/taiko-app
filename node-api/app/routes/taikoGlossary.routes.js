const router = require('express').Router(); 
const taikoGlossaryController = require('../controllers/taikoGlossary.controller'); 

router.get('/', taikoGlossaryController.readAll); 

module.exports = router; 