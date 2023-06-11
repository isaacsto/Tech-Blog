const router = require('express').Router();
const { BlogPost } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
  try {
    const dbPostData = await BlogPost.findAll({ include : 'author'});

   const posts = dbPostData.map((post) => {
   /* const { id, title, body, posted, author } =   */post.get({ plain: true })
      /*  return {
        id, title, body, posted, author: author.name 
      }  */
     });

    res.render('dashboard', {
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

router.get('/create/post', withAuth, (req, res) => {
  res.render('create-post', { loggedIn: req.session.loggedIn });
});
 
module.exports = router;
