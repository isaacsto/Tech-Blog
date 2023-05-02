const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

  class BlogPost extends Model {}
  BlogPost.init(

   {
    id: {
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true, 
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING, 
      allowNull: false, 
    },
    body: {
      type: DataTypes.STRING, 
      allowNull: false, 
    },
    author_id: {
      type: DataTypes.INTEGER, 
      references: {
        model: 'author',
        key: 'id',
      },
    },
    posted: {
      type: DataTypes.DATE,
      allowNull: false, 
      defaultValue: Date.now(),
    }
  },
  {
    sequelize,
    modelName: 'blogpost',
    timestamps: false,
  }
  );

  module.exports = BlogPost;
