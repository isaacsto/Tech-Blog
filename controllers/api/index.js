const router = require('express').Router();

const blogPost = require('./blogpost-routes');
const userRoutes = require('./user-routes');

router.use('/blogpost', blogPost);
router.use('/users', userRoutes);

module.exports = router; 