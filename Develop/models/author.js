const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Author extends Model {}
Author.init(
  {
    constructor(user, bio, profilePicture) {
      this.user = user;
      this.bio = bio;
      this.profilePicture = profilePicture;
    }
  });

  