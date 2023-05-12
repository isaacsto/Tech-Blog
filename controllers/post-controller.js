const { BlogPost } = require('../models');

const postController = {
  createPost: async (req, res) => {
    try {
      const { title, content } = req.body;

      if (!title || !content) {
        res.status(400).render('error', { message: 'Title and content are required fields!' });
        return;
      }

      const newPost = await BlogPost.create({
        title,
        content,
        author_id: req.session.author_id,
      });
      res.redirect('/'); // Redirect to the homepage or a specific route after successful creation
    } catch (err) {
      console.error(err);
      res.status(500).render('error', { error: err });
    }
  },

  getAllPosts: async (req, res) => {
    try {
      const dbPostData = await BlogPost.findAll();
      const posts = dbPostData.map((post) => post.get({ plain: true }));
      res.render('homepage', {
        posts,
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      console.error(err);
      res.status(500).render('error', { error: err });
    }
  },

  getPostById: async (req, res) => {
    try {
      const postData = await BlogPost.findByPk(req.params.id);
      if (!postData) {
        res.status(404).render('error', { message: 'No blog post found with this id!' });
        return;
      }
      const post = postData.get({ plain: true });
      res.render('post', { post, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.error(err);
      res.status(500).render('error', { error: err });
    }
  },

  updatePost: async (req, res) => {
    try {
      const { title, content } = req.body;

      if (!title || !content) {
        res.status(400).render('error', { message: 'Title and content are required fields!' });
        return;
      }

      const updatedPost = await BlogPost.update(
        { title, content },
        {
          where: {
            id: req.params.id,
            author_id: req.session.author_id,
          },
        }
      );

      if (!updatedPost[0]) {
        res.status(404).render('error', { message: 'No blog post found with this id!' });
        return;
      }

      res.redirect('/'); // Redirect to the homepage or a specific route after successful update
    } catch (err) {
      console.error(err);
      res.status(500).render('error', { error: err });
    }
  },

  deletePost: async (req, res) => {
    try {
      const deletedPost = await BlogPost.destroy({
        where: {
          id: req.params.id,
          author_id: req.session.author_id,
        },
      });

      if (!deletedPost) {
        res.status(404).render('error', { message: 'No blog post found with this id!' });
        return;
      }

      res.redirect('/'); // Redirect to the homepage or a specific route after successful deletion
    } catch (err) {
      console.error(err);
      res.status(500).render('error', { error: err });
    }
  },
};

module.exports = postController;

