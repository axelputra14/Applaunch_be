const errorHandler = (err, req, res, next) => {
  let statusCode = 500;
  let message = "Internal Server Error";

  if (err.name === "SequelizeValidationError") {
    statusCode = 400;
    message = "Field cannot be empty";
  }

  if (err.message === "Forbidden") {
    statusCode = 403;
    message = "You don't have access";
  }

  if (err.message === "APP_NOT_FOUND") {
    statusCode = 404;
    message = "Application not found";
  }

  if (err.message === "DATA_NOT_FOUND") {
    statusCode = 404;
    message = "No data found";
  }

  res.status(statusCode).json({
    statusCode,
    message,
  });
};

module.exports = errorHandler;
