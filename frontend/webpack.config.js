module.exports = {
    // inne ustawienia
    devServer: {
      setupMiddlewares: function (middlewares, devServer) {
        // Dodaj swoje middleware przed standardowym setup
        middlewares.unshift(function (req, res, next) {
          // Twoje middleware przed setup
          next();
        });
  
        // Dodaj swoje middleware po standardowym setup
        middlewares.push(function (req, res, next) {
          // Twoje middleware po setup
          next();
        });
  
        return middlewares;
      },
    },
  };
  