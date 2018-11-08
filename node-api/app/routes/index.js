const router = require('express').Router(); 
const taikoGlossaryRoutes = require('./taikoGlossary.routes'); 

router.use('/api/taiko-glossary', taikoGlossaryRoutes)

module.exports = router; 