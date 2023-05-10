const router = require('express').Router();


const homeRoutes = require('./home-routes');
const api = require('./api');

router.use('/', homeRoutes)
router.use('/api', api);

module.exports = router;
