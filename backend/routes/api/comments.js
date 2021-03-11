const router = require("express").Router();
const { check } = require("express-validator");

const { asyncHandler, handleValidationErrors } = require("../utils");
const db = requrie("../../db/models");

const { Comments} = db;

const commentValidations = [
  check("description")
    .isLength({ min: 1, max: 200 })
    .withMessage("Description has to be between 1 and 200 letters long"),
];




router.get(
  "/:tasktId/comments",
  asyncHandler(async (req, res) => {
    const taskId = req.params.taskId;
    const comments = await Comments.findAll({
      where: {
        taskId,
      },
      order: [["createdAt", "DESC"]],
    });

    res.json({ comments });
  })
);

router.get(
  "/:id(\\d+)",
  asyncHandler(async (req, res) => {
    const commentId = req.params.id;
    const comment = await Comments.findByPk(commentId);

    res.json({ comment});
  })
);

router.post(
  "/",
  commentValidations,
  asyncHandler(async (req, res) => {
    const { description } = req.body;

    let comment = await Comments.create({
      description,
    });

    comment = await Comments.findOne({
      where: {
        id: comment.id,
      },
    });

    res.json({ comment: [comment] });
  })
);

router.delete(
  "/:id",
  asyncHandler(async (req, res, next) => {
    const id = req.params.id;

    const comment = await Comments.findOne({
      where: { 
          id 
        },
    });

    await Comment.destroy();
    res.status(200).json({ comment});
  })
);

module.exports = router;