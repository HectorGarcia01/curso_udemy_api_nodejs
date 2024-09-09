const errorLogs = (err, req, res, next) => {
  console.log("ErrorLogs");
  console.error(err);
  next(err);
};

const handlerError = (err, req, res, next) => {
  console.log("HandlerError");
  res.status(400).json({
    message: err.message,
    stack: err.stack
  });
};

module.exports = {
  errorLogs,
  handlerError
}
