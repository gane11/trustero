const { validationResult } = require("express-validator");
const asyncHandler = (handler) => (req,res,next) => handler(req,res,next).catch(next);

const handleValidationErrors = (req,res, next) => {
    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
      const errors = validationErrors.array();

      const err = Error("Bad Request");
      err.status = 400;
      err.title = "Bad Request";
      err.errors = errors;
      return next(err);
    }
    next();
}


module.exports = { asyncHandler, handleValidationErrors}