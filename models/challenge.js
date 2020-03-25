'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model

  class Challenge extends Model {}

  Challenge.init({
    name: DataTypes.STRING,
    isComplete: DataTypes.BOOLEAN
  }, { sequelize });
  
  Challenge.associate = function(models) {
    // associations can be defined here
  };
  return Challenge;
};