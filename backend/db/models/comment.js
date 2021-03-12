'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    "Comment",
    {
      description: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      taskId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: { model: "Tasks" },
      },
    },
    {}
  );
  Comment.associate = function(models) {
    Comment.belongsTo(models.Comment, {foreignKey: 'listId'})
  };
  return Comment;
};