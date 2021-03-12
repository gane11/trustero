'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const lists = await queryInterface.bulkInsert(
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
      { returning: true }
    );

    return await queryInterface.bulkInsert("Tasks", [
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
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
