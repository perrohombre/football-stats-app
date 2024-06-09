const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 3000,
    setupMiddlewares: function (middlewares, devServer) {
      // Dodaj swoje middleware przed standardowym setup
      middlewares.unshift(function (req, res, next) {
        // Twoje middleware przed setup
        console.log('Middleware przed setup');
        next();
      });

      // Dodaj swoje middleware po standardowym setup
      middlewares.push(function (req, res, next) {
        // Twoje middleware po setup
        console.log('Middleware po setup');
        next();
      });

      return middlewares;
    },
  },
};
