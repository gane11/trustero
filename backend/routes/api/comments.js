const router = require("express").Router();
const { check } = require("express-validator");

const { asyncHandler, handleValidationErrors } = require("../utils");
const db = require("../../db/models");

const { Comment} = db;

const commentValidations = [
  check("description")
    .isLength({ min: 1, max: 200 })
    .withMessage("Description has to be between 1 and 200 letters long"),
];

const commentNotFoundError = (id) => {
  const err = Error("Comment not found");
  err.errors = [`Comment with the id of ${id} could not be found`];
  err.title = "Comment not found";
  err.status = 404;
  return err;
};

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const comments = await Comment.findAll({
      order: [["createdAt", "DESC"]],
    });

    res.json({ comments });
  })
);


router.get(
  "/:tasktId/comments",
  asyncHandler(async (req, res) => {
    const taskId = req.params.taskId;
    const comments = await Comment.findAll({
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
    const comment = await Comment.findByPk(commentId);

    if (comment) {
        res.json({ comment});    
    } else {
        next(commentNotFoundError(commentId))
    }
  })
);

router.put(
  "/:id(\\d+)",
  asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const comment = await Comment.findOne({
      where: {
        id
      },
    });
    if (comment) {
      await Comment.update({ commentDescription: req.body.editComment});
      res.json({ comment });
    } else {
      next(taskNotFoundError(id));
    }
  })
);

router.post(
  "/",
  commentValidations,
  asyncHandler(async (req, res) => {
    const { description, taskId } = req.body;

    let comment = await Comment.create({
      description,
      taskId
    });

    comment = await Comment.findOne({
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

    const comment = await Comment.findOne({
      where: { 
          id 
        },
    });


    if (comment) {
    await Comment.destroy();
    res.json({ message: `Deleted Comment with id of ${id}!` });
  } else {
    next(commentNotFoundError(id));
  };

  }));

module.exports = router;