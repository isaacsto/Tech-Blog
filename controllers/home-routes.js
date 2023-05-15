const router = require('express').Router();
const { BlogPost } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
  try {
    const dbPostData = await BlogPost.findAll();

    const posts = dbPostData.map((post) =>
      post.get({ plain: true })
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
    const dbPostData = await BlogPost.findByPk(req.params.id, {
      include: [
        {
          model: [BlogPost],
          attributes: [
            'id',
            'title',
            'author',
            'exhibition_date',
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
    const PostData = await BlogPost.findByPk(req.params.id);

    const post = PostData.get({ plain: true });

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

router.get('/create-post', withAuth, (req, res) => {
  res.render('create-post', { loggedIn: req.session.loggedIn });
});

// Route for creating new post
router.post('/create-post', withAuth, async (req, res) => {
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


module.exports = router;
