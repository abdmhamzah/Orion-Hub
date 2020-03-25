'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model

  class StudentChallenge extends Model {}

  StudentChallenge.init({
    StudentId: DataTypes.INTEGER,
    ChallengeId: DataTypes.INTEGER
  }, { sequelize });
  
  StudentChallenge.associate = function(models) {
    // associations can be defined here
  };
  return StudentChallenge;
};