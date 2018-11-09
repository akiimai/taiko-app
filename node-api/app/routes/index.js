const router = require('express').Router(); 
const taikoGlossaryRoutes = require('./taikoGlossary.routes'); 

router.use('/taiko-glossary', taikoGlossaryRoutes)

module.exports = router; 