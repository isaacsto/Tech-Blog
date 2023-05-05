const router = require('express').Router();
const { BlogPost } = require('../models');
const withAuth = require('../utils/auth');

// get all blog posts for homepage
router.get('/', async (req, res) => {
  try {
    const dbPostData = await BlogPost.findAll();
    const posts = dbPostData.map((post) => post.get({ plain: true }));
    res.render('homepage', {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// get a single blog post
router.get('/post/:id', withAuth, async (req, res) => {
  try {
    const postData = await BlogPost.findByPk(req.params.id);
    if (!postData) {
      res.status(404).json({ message: 'No blog post found with this id!' });
      return;
    }
    const post = postData.get({ plain: true });
    res.render('post', { post, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// create a new blog post
router.post('/', withAuth, async (req, res) => {
  try {
    const newPost = await BlogPost.create({
      title: req.body.title,
      content: req.body.content,
      author_id: req.session.author_id,
    });
    res.status(200).json(newPost);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// update a blog post
router.put('/:id', withAuth, async (req, res) => {
  try {
    const updatedPost = await BlogPost.update(req.body, {
      where: {
        id: req.params.id,
        author_id: req.session.author_id,
      },
    });
    if (!updatedPost[0]) {
      res.status(404).json({ message: 'No blog post found with this id!' });
      return;
    }
    res.status(200).json(updatedPost);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// delete a blog post
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const deletedPost = await BlogPost.destroy({
      where: {
        id: req.params.id,
        author_id: req.session.author_id,
      },
    });
    if (!deletedPost) {
      res.status(404).json({ message: 'No blog post found with this id!' });
      return;
    }
    res.status(200).json(deletedPost);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
