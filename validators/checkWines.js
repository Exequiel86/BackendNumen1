const { check } = require ('express-validator')
const { validateResult } = require('../helpers/validateHelpers')

const validateCreate = [
    check('marca:')
    .exists()
    .not()
    .isEmpty(),
    check('bodega:')
    .exists()
    .not()
    .isEmpty(),
    check('age:')
    .exists()
    .not()
    .isEmpty(),
    check('varietal:')
    .exists()
    .not()
    .isEmpty(),
    check('precio:')
    .exists()
    .not()
    .isEmpty()
    .isNumeric(),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { validateCreate }