'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {  
    return queryInterface.bulkInsert(
      "Comments",
      [
        {
          description: 'this one is important',
          taskId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
         {
          description: 'this one is important',
          taskId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
         {
          description: 'this one is important',
          taskId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
         {
          description: 'this one is important',
          taskId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
         {
          description: 'this one is important',
          taskId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
         {
          description: 'this one is important',
          taskId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
         {
          description: 'this one is important',
          taskId: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
         {
          description: 'this one is important',
          taskId: 13,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
         {
          description: 'this one is important',
          taskId: 14,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
         {
          description: 'this one is important',
          taskId: 16,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
         {
          description: 'this one is important',
          taskId: 17,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
         {
          description: 'this one is important',
          taskId: 19,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description: 'this one is important',
          taskId: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Comments')
  }
};
