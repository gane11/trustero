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
          taskId: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
         {
          description: 'this one is important',
          taskId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
         {
          description: 'this one is important',
          taskId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
         {
          description: 'this one is important',
          taskId: 3,
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
      ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Comments')
  }
};
