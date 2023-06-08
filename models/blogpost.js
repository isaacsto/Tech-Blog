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
      allowNull: true, 
      validate: {
        notEmpty: true,
        len: [1, 255],
      }
    },
    body: {
      type: DataTypes.STRING, 
      allowNull: true, 
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
      defaultValue: new Date(),
    }
  },
  {
    sequelize,
    modelName: 'blogpost',
    timestamps: false,
  }
  );

  module.exports = BlogPost;
