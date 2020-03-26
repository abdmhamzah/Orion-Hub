'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model

  class Buddy extends Model {

    getFullName(){
      return `${this.first_name} ${this.last_name}`
    }

  }

  Buddy.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING
  }, { sequelize });
  
  Buddy.associate = function(models) {
    Buddy.hasMany(models.Student)
  };
  return Buddy;
};