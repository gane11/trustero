const router = require("express").Router();
const { check } = require("express-validator");

const { asyncHandler, handleValidationErrors } = require("../utils");
const db = require("../../db/models");

const { Task } = db;

const taskValidations = [
  check("title")
    .exists({ checkFalsy: true })
    .withMessage("Name of the Task required")
    .isLength({ min: 1, max: 50 })
    .withMessage("Task title has to be between 1 and 50 letters long"),
  check("description")
    .isLength({ min: 1, max: 200 })
    .withMessage("Description has to be between 1 and 200 letters long"),
];

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const tasks = await Task.findAll({
      order: [["createdAt", "DESC"]],
    });

    res.json({ tasks });
  })
);

const taskNotFoundError = (id) => {
  const err = Error("Task not found");
  err.errors = [`Task with the id of ${id} could not be found`];
  err.title = "Task not found";
  err.status = 404;
  return err;
};

router.get(
  "/:listId/tasks",
  asyncHandler(async (req, res) => {
    const listId = req.params.listId;
    const tasks = await Tasks.findAll({
        where: {
            listId
        },
        order: [["createdAt", "DESC"]],
    });

    res.json({tasks});
  })
);

router.get(
  "/:id(\\d+)",
  asyncHandler(async (req, res) => {
    const taskId = req.params.id;
    const task = await Task.findByPk(taskId);
   if (task) {
     res.json({ task });
   } else {
     next(taskNotFoundError(taskId));
   }
  })
);

router.put(
  "/:id(\\d+)",
  asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const task = await Task.findOne({
      where: {
        id
      },
    });
    if (task) {
      await Task.update({ taskTitle: req.body.editTaskTitle });
      res.json({ task });
    } else {
      next(taskNotFoundError(id));
    }
  })
);

router.post(
  "/",
  taskValidations,
  asyncHandler(async (req, res) => {
    const { 
        title,
        description,
        listId
     } = req.body;

    let task = await Task.create({
        title,
        description,
        listId
     });

    task = await Task.findOne({
      where: {
        id: task.id,
      },
    });

    res.json({ task: [task] });
  })
);

router.delete(
  "/:id",
  asyncHandler(async (req, res, next) => {
    const id = req.params.id;

    const task = await Task.findOne({
      where: { id },
    });

    if (task) {
    await task.destroy();
    res.json({ message: `Deleted Task with id of ${id}!` });
  } else {
    next(taskNotFoundError(id));
  };

  }));

module.exports = router;