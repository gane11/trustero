'use strict';
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    title: {
     allowNull: false,
     type: DataTypes.STRING, 
    },
    description: {
     allowNull: false,
     type: DataTypes.TEXT, 
    },
    isComplete: {
     allowNull: false,
     defaultValue: false,
     type: DataTypes.BOOLEAN, 
    },
    listId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'Lists' }
    }
  }, {});
  Task.associate = function(models) {
    Task.belongsTo(model.List, {foreignKey: 'listId'})
  };
  return Task;
};
