<<<<<<< HEAD
=======
const { UnauthorizedError } = require("express-jwt");
>>>>>>> origin/main
const { ValidationError } = require("express-validation");

module.exports = (error, req, res, next) => {
  if (error instanceof ValidationError) {
<<<<<<< HEAD
    return res.status(error.statusCode).json(error.details);
  }

  return res.status(error.status || 500).json(error);
=======
    return res.status(error.statusCode).json(error);
  }

  if (error instanceof UnauthorizedError) {
    return res.status(error.status).json(error);
  }

  return res.status(500).json(error);
>>>>>>> origin/main
};