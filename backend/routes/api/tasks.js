const router = require("express").Router();
const { check } = require("express-validator");

const { asyncHandler, handleValidationErrors } = require("../utils");
const db = requrie("../../db/models");

const { Tasks } = db;

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
    const task = await Tasks.findByPk(taskId);

    res.json({ task });
  })
);

router.post(
  "/",
  taskValidations,
  asyncHandler(async (req, res) => {
    const { 
        title,
        description,
     } = req.body;

    let task = await task.create({
        title,
        description
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
    const taskId = req.params.id;

    const task = await Task.findOne({
      where: { id },
    });

    await task.destroy();
    res.status(200).json({ task });
  })
);

module.exports = router;