'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Tasks",
      [
      {
        title: "Do this",
        description: "you just have to do it",
        isComplete: false,
        listId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Do that",
        description: "you just have to do it for real",
        isComplete: false,
        listId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Do this",
        description: "you just have to do it",
        isComplete: false,
        listId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Do that",
        description: "you just have to do it for real",
        isComplete: false,
        listId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Do this",
        description: "you just have to do it",
        isComplete: false,
        listId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Do that",
        description: "you just have to do it for real",
        isComplete: false,
        listId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Do this",
        description: "you just have to do it",
        isComplete: false,
        listId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Do that",
        description: "you just have to do it for real",
        isComplete: false,
        listId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Do this",
        description: "you just have to do it",
        isComplete: false,
        listId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Do that",
        description: "you just have to do it for real",
        isComplete: false,
        listId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Do this",
        description: "you just have to do it",
        isComplete: false,
        listId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Do that",
        description: "you just have to do it for real",
        isComplete: false,
        listId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tasks');
  }
};
