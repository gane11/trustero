const router = require('express').Router();
const {check} = require('express-validator');

const {asyncHandler, handleValidationErrors} = require('../utils');
const db = require('../../db/models');

const {List} = db;


const listValidations = [
    check('title')
        .exists({checkFalsy: true})
        .withMessage('Name of the list required')
        .isLength({min: 1, max: 50})
        .withMessage('List title has to be between 1 and 50 letters long'),
    handleValidationErrors
];

const listNotFoundError = (id) => {
  const err = Error("List not found");
  err.errors = [`List with the id of ${id} could not be found`];
  err.title = "List not found";
  err.status = 404;
  return err;
};


router.get('/', asyncHandler(async(req, res) => {
    const lists = await List.findAll({
        order: [['createdAt','DESC']]
    });

    res.json({lists})
}));


router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
    const listId = req.params.id;
    const list = await List.findByPk(listId);

    res.json({list});
    if (list) {
    res.json({ list })
  } else {
    next(listNotFoundError(listId))
  }
}))

router.put(
  "/:id(\\d+)",
  asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const list = await List.findOne({
      where: {
        id
      },
    });
    if (list) {
      await list.update({ listTitle: req.body.editListTitle });
      res.json({ list });
    } else {
      next(listNotFoundError(id));
    }
  })
);


router.post('/',
listValidations,
 asyncHandler( async(req, res) => {
    const {title} = req.body;

    let list = await List.create({title});

    list = await List.findOne({
        where: {
            id: list.id
        }
    });

    res.json({list: [list]});
}));


router.delete('/:id', asyncHandler(async (req,res, next) => {
    const listId = req.params.id;

    const list = await List.findOne({
        where: {id}
    });
    if (list) {
    await list.destroy();
    res.json({ message: `Deleted list with id of ${listId}!` });
  } else {
    next(listNotFoundError(listId));
  }

}));


module.exports = router