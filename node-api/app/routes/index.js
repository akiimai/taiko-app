const router = require('express').Router(); 
const taikoGlossaryRoutes = require('./taikoGlossary.routes'); 
const taikoDrillsRoutes = require('./taikoDrills.routes'); 
const drillTypeRoutes = require('./drillType.routes'); 

router.use('/taiko-glossary', taikoGlossaryRoutes)
router.use('/taiko-drills/generator', taikoDrillsRoutes)
router.use('/taiko-drills', taikoDrillsRoutes)
router.use('/drill-type', drillTypeRoutes)

module.exports = router; 