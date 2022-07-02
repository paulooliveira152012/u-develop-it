//express will route everything together
const express = require('express');
//commom route-prefix to group route handlers
const router = express.Router();
//request access to candidateRoutes
router.use(require('./candidateRoutes'));
//require access to partyRoutes
router.use(require('./partyRoutes'));

module.exports = router;

