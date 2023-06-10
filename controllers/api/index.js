const router = require('express').Router();

const blogPost = require('./blogpost-routes');
const userRoutes = require('./user-routes');
const postRoutes = require('../post-controller')

router.use('/blogpost', blogPost);
router.use('/users', userRoutes);
router.use('/post', postRoutes);

module.exports = router; 
