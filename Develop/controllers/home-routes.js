const router = require('express').Router();
const { Post } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

// GET all galleries for homepage
router.get('/', async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
      include: [
        {
          model: postData,
          attributes: [],
        },
      ],
    });

    const posts = dbPostData.map((post) =>
      posty.get({ plain: true })
    );

    res.render('homepage', {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/Post/:id', withAuth, async (req, res) => {
  try {
    const dbPostData = await Gallery.findByPk(req.params.id, {
      include: [
        {
          model: [Post],
          attributes: [
            'id',
            'title',
            'author',
            'exhibition_date',
            'filename',
            'description',
          ],
        },
      ],
    });

    const posts = dbPostData.get({ plain: true });
    res.render('post', { gallery, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.get('/post/:id', withAuth, async (req, res) => {
  try {
    const dbPostData = await Post.findByPk(req.params.id);

    const post = dbPostData.get({ plain: true });

    res.render('post', { post, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
