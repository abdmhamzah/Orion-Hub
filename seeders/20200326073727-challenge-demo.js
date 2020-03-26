'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const listChallenge = [
      {
        name: 'Sudoku',
        isComplete: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Battleship',
        isComplete: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
    return queryInterface.bulkInsert('Challenges', listChallenge, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Challenges', null, {});
  }
};
