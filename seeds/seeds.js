const sequelize = require('../config/connection');
const { Author, BlogPost } = require('../models');

const postData = require('./postData');
const authorData = require('./authorData.json');

const postContent = [
  { title: 'Post 1', content: 'Lorem ipsum dolor sit amet.' },
  { title: 'Post 2', content: 'Consectetur adipiscing elit.' },
  { title: 'Post 3', content: 'Sed do eiusmod tempor incididunt.' },
]

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const authors = await Author.bulkCreate(authorData, {
    individualHooks: true,
    returning: true,
  });

  for (const post of postContent) {
    await BlogPost.create({
      ...post,
      author_id: authors[Math.floor(Math.random() * authors.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
