'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model

  class Buddy extends Model {}

  Buddy.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING
  }, { sequelize });
  
  Buddy.associate = function(models) {
    // associations can be defined here
    Buddy.hasOne(models.Student)
  };
  return Buddy;
};