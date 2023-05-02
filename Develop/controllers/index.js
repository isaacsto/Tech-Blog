const router = require('express').Router();


const homeRoutes = require('./home-routes');
const userRoutes = requore('./user-routes');

router.use('/', homeRoutes)
router.use('/', userRoutes);

module.exports = router;
