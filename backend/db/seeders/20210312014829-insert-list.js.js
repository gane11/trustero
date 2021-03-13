'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
     return queryInterface.bulkInsert(
      "Lists",
      [
        {
          title: "Work",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Shopping",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Workout",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Groceries",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Trustero",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Interview",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Lists")
  }
};
