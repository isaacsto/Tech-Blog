const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

  class BlogPost extends Model {}
  BlogPost.init(

   {
    constructor(title, author, content, dateCreated, dateUpdated) {
      this.title = title;
      this.author = author;
      this.content = content;
      this.dateCreated = dateCreated;
      this.dateUpdated = dateUpdated;
    }
  });