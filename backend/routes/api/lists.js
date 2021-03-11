const router = require('express').Router();
const {check} = require('express-validator');

const {asyncHandler, habdleValidationErrors} = require('../utils');
const db = requrie('../../db/models');

const {Lists} = db;


const listValidations = [
    check('title')
        .exists({checkFalsy: true})
        .withMessage('Name of the list required')
        .isLength({min: 1, max: 50})
        .withMessage('List title has to be between 1 and 50 letters long')
    
];


router.get('/', asyncHandler(async(req, res) => {
    const lists = await List.findAll({
        order: [['createdAt','DESC']]
    });

    res.json(lists)
}));


router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
    const listId = req.params.id;
    const list = await List.findByPk(listId);

    res.json({list});
}))


router.post('/', asyncHandler( async(req, res) => {
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

    await list.destroy();
    res.status(200).json({list})

}));


module.exports = router