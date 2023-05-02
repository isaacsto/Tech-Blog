const sequelize = require('../config/connection');
const { Author, BlogPost } = require('../models');

const postData = require('./postData');
const authorData = require('./authorData.js');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const authors = await User.bulkCreate(authorData, {
    individualHooks: true,
    returning: true,
  });

  for (const post of postData) {
    await BlogPost.create({
      ...post,
      author_id: authors[Math.floor(Math.random() * authors.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
