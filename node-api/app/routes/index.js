const router = require('express').Router(); 
const taikoGlossaryRoutes = require('./taikoGlossary.routes'); 
const taikoDrillsRoutes = require('./taikoDrills.routes'); 

router.use('/taiko-glossary', taikoGlossaryRoutes)
router.use('/taiko-drills', taikoDrillsRoutes)

module.exports = router; 