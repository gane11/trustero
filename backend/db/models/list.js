'use strict';
module.exports = (sequelize, DataTypes) => {
  const List = sequelize.define('List', {
    title: {
      allowNull: false,
      type: DataTypes.STRING(50)
    } 
  }, {});
  List.associate = function(models) {
    List.hasMany(models.Task, {as: 'task', foreignKey:'listId'}, {onDelete:'cascade', hooks:true});
  };
  return List;
};