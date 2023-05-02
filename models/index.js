const Author = require('./author');
const BlogPost = require('./blogpost');

Author.hasMany(BlogPost, {
  foreignKey: 'author_id',
  onDelete: 'CASCADE'
});

BlogPost.belongsTo(Author, {
  foreignKey: 'author_id'
});

module.exports = { Author, BlogPost};
