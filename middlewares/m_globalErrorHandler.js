export function configErrorHandler(app) {
  app.use(setGlobalErrorHandler());
}

function setGlobalErrorHandler() {
  return (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
      message: err.message,
      errorName: err.name
    });
  }
}